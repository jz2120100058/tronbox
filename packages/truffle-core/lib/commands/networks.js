var command = {
  command: 'networks',
  description: 'Show addresses for deployed contracts on each network',
  builder: {
    clean: {
      describe: "Remove network artifacts that don't belong to any configuration",
      type: "boolean",
      default: false
    }
  },
  run: function (options, done) {
    process.env.CURRENT = 'networks'
    var Config = require("../../components/Config");
    var Networks = require("../networks");

    var config = Config.detect(options);

    if (options.clean) {
      Networks.clean(config, done);
    } else {
      Networks.display(config, done);
    }
  }
}

module.exports = command;

const Command = require('../../structures/command');

class Global extends Command {
  constructor (...args) {
    super(...args, {
      name: 'glob',
      aliases: ['gooc']
    });
  }

  async run (player, command, args) {
    mp.players.broadcast(`(( ${player.name}: ${command.fullText} ))`);
  }
}

module.exports = Global;

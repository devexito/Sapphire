const CommandTemplate = require('../classes/commandTemplate.js')

class Command extends CommandTemplate {
  get alias () {
    return {
      ru: ['стоп', 'ст'],
      en: ['stop', 'st']
    }
  }

  get description () {
    return {
      ru: 'Останавливает воспроизведение',
      en: 'Stops playback'
    }
  }

  get permissions () {
    return []
  }

  async run (msg, sp, qm) {
    qm.destroy(msg.guildID)
    msg.addReaction('s_check:540623604505903124')
  }
}

module.exports = Command

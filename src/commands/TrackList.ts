const { Command } = require('discord-akairo')

const track = require('../assets/track.json')

export default class TrackList extends Command {
    constructor() {
        super('tl', {
            aliases: ['tl'],
            cooldown: 5000
        });
    }

    exec(message: any, args: any) {     
        message.channel.send(track.tracklist)
    }
}

module.exports = TrackList
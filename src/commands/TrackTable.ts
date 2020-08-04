const {Command} = require('discord-akairo')

const track =  require('../assets/track.json')

export default class TrackTable extends Command {
    constructor() {
        super('tt', {
            aliases: ['tt'],
            cooldown: 5000,
            args: [
                {
                    id: 'trackName',
                    type: 'string'
                },
            ],
        });
    }

    exec(message: any, args: any) {     
        if(args.trackName  == null) return message.channel.send('please enter the track name: _tt <trackName>')

        const url: null | undefined = track.tracks[args.trackName.toLowerCase()]

        if(url == null || url == undefined) return message.channel.send('invalid track name')

        message.channel.send(track.tracks[args.trackName.toLowerCase()])
    }
}

module.exports = TrackTable
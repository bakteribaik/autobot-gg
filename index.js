const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    intents: 3276799,
    checkUpdate: false
});

client.on("voiceStateUpdate", (oldstate, newstate) => {
    if (newstate.channelId !== null) {
        setTimeout(() => {
            client.user.setActivity({
                name : `${newstate.guild.name} Server`,
                type : 'LISTENING',
            })
            console.log('update status')
        }, 10000);
    }else{
        setTimeout(() => {
            client.user.setActivity({
                name:'',
                type: "COMPETING",
            })
            console.log('remove status')
        }, 10000);
    }
})

client.login('NzE1MTk5NTM1OTQ0ODI2OTY5.GYB3JW.4GulhR3GNWuLbpW4RpxJDfxNLp0H4A6I8YAzgg')

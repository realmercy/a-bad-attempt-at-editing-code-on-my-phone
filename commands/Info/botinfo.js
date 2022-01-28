const {
    MessageEmbed
} = require("discord.js");
const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
let cpuStat = require("cpu-stat");
let os = require("os");
module.exports = {
    name: "botinfo", //the command name for execution & for helpcmd [OPTIONAL]
    category: "Info",
    usage: "botinfo",
    aliases: ["info",],
    cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
    description: "Shows Information about the Bot", //the command description for helpcmd [OPTIONAL]
    memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
    requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
    alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
    run: async (client, message, args) => {
        try {

            cpuStat.usagePercent(function (e, percent, seconds) {
                try {
                    if (e) return console.log(String(e.stack).red);

                    let connectedchannelsamount = 0;
                    let guilds = client.guilds.cache.map((guild) => guild);
                    for (let i = 0; i < guilds.length; i++) {
                        if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
                    }
                    if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

                    const botinfo = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setTitle("__**Stats:**__")
                        .setColor(ee.color)
                        .addField("<a:bigbrainpepe:930133057183289405> Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
                        .addField("<a:pepethink:930133112892043284> Uptime ", `${duration(client.uptime).map(i=>`\`${i}\``).join(", ")}`, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:users:936606022896857128> Users", `\`Total: ${client.users.cache.size} Users\``, true)
                        .addField("<a:servers:936605861978198026> Servers", `\`Total: ${client.guilds.cache.size} Servers\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:pepe_jamming:933708762206830592> Voice-Channels", `\`${client.channels.cache.filter((ch) => ch.type === "GUILD_VOICE" || ch.type === "GUILD_STAGE_VOICE").size}\``, true)
                        .addField("<a:pepoJammin:933579043167674418> Connections", `\`${connectedchannelsamount} Connections\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:discord:935763681822769223> Discord.js", `\`v${Discord.version}\``, true)
                        .addField("<:nodejs:936607818348392478> Node", `\`${process.version}\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:animated:936626188208709633> CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
                        .addField("<a:animated:936626188208709633> CPU usage", `\`${percent.toFixed(2)}%\``, true)
                        .addField("<a:animated:936626188208709633> Arch", `\`${os.arch()}\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:asyncParrot:936627145948680202> Platform", `\`\`${os.platform()}\`\``, true)
                        .addField("<a:Loading:930133134316548117> API Latency", `\`${client.ws.ping}ms\``, true)
                        .setFooter(process.env.footer);
                    message.reply({
                        embeds: [botinfo]
                    });

                } catch (e) {
                    console.log(e)
                    let connectedchannelsamount = 0;
                    let guilds = client.guilds.cache.map((guild) => guild);
                    for (let i = 0; i < guilds.length; i++) {
                        if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
                    }
                    if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;
                    const botinfo = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setTitle("__**Stats:**__")
                        .setColor(ee.color)
                        .addField("<a:bigbrainpepe:930133057183289405> Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
                        .addField("<a:pepethink:930133112892043284> Uptime ", `${duration(client.uptime).map(i=>`\`${i}\``).join(", ")}`, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:users:936606022896857128> Users", `\`Total: ${client.users.cache.size} Users\``, true)
                        .addField("<a:servers:936605861978198026> Servers", `\`Total: ${client.guilds.cache.size} Servers\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:pepe_jamming:933708762206830592> Voice-Channels", `\`${client.channels.cache.filter((ch) => ch.type === "GUILD_VOICE" || ch.type === "GUILD_STAGE_VOICE").size}\``, true)
                        .addField("<a:pepoJammin:933579043167674418> Connections", `\`${connectedchannelsamount} Connections\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:discord:935763681822769223> Discord.js", `\`v${Discord.version}\``, true)
                        .addField("<:nodejs:936607818348392478> Node", `\`${process.version}\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:animated:936626188208709633> CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
                        .addField("<a:animated:936626188208709633> CPU usage", `\`${percent.toFixed(2)}%\``, true)
                        .addField("<a:animated:936626188208709633> Arch", `\`${os.arch()}\``, true)
                        .addField("\u200b", `\u200b`, true)
                        .addField("<a:asyncParrot:936627145948680202> Platform", `\`\`${os.platform()}\`\``, true)
                        .addField("<a:Loading:930133134316548117> API Latency", `\`${client.ws.ping}ms\``, true)
                        .setFooter(process.env.foote);
                    message.reply({
                        embeds: [botinfo]
                    });
                }
            })

            function duration(duration, useMilli = false) {
                let remain = duration;
                let days = Math.floor(remain / (1000 * 60 * 60 * 24));
                remain = remain % (1000 * 60 * 60 * 24);
                let hours = Math.floor(remain / (1000 * 60 * 60));
                remain = remain % (1000 * 60 * 60);
                let minutes = Math.floor(remain / (1000 * 60));
                remain = remain % (1000 * 60);
                let seconds = Math.floor(remain / (1000));
                remain = remain % (1000);
                let milliseconds = remain;
                let time = {
                    days,
                    hours,
                    minutes,
                    seconds,
                    milliseconds
                };
                let parts = []
                if (time.days) {
                    let ret = time.days + ' Day'
                    if (time.days !== 1) {
                        ret += 's'
                    }
                    parts.push(ret)
                }
                if (time.hours) {
                    let ret = time.hours + ' Hr'
                    if (time.hours !== 1) {
                        ret += 's'
                    }
                    parts.push(ret)
                }
                if (time.minutes) {
                    let ret = time.minutes + ' Min'
                    if (time.minutes !== 1) {
                        ret += 's'
                    }
                    parts.push(ret)

                }
                if (time.seconds) {
                    let ret = time.seconds + ' Sec'
                    if (time.seconds !== 1) {
                        ret += 's'
                    }
                    parts.push(ret)
                }
                if (useMilli && time.milliseconds) {
                    let ret = time.milliseconds + ' ms'
                    parts.push(ret)
                }
                if (parts.length === 0) {
                    return ['instantly']
                } else {
                    return parts
                }
            }
            return;
        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
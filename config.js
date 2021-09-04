module.exports = {
    //IMPORTANT: If you need help with the installation of Green-bot, you can join our support server here: https://green-bot.app/discord
    prefix: "+",
    // Your discord bot token. https://discord.com/developpers/bots
    token: "ODgyMTg2NDE1ODg5MzUwNjU2.YS3uHw.jAz0Ivmojl-sAag3JzaUJ3MnlNM",
    // Your ID
    ownerID: "852940522267213824",
    // Your name/tag
    ownerName: "GOD OF WAR†ᴱᴺ#0001",
    //The footer of the embeds that the bot will send
    footer: "ORIGIN TECH",
    // The id of the support
    supportID: "729774155037278268",
    // The status of your bot
    game: "ORIGIN BASE.",
    //the color of the embeds
    color: "RANDOM",
    // OPTIONAL: Your top.gg token.
    topgg: "null",
    // OPTIONAL: The link of your bot's top.gg page.
    topgg_url: "nukk",
    //the default bot language. fr or en
    defaultLanguage: "en",
    // If dev mod is enabled
    devMode: true,
    // The server where you test the commands
    devServer: "850777243662811137",
    // If you want to log every command,event etc. Usefull for debuging
    logAll: true,
    // If you want to test your configuration before starting the bot
    checkConfig: null,
    // The categories. Put null to enabled to disable a category
    categories: {
        configuration: { enabled: true, name: "Configuration", desc: "Setup the bot with the configuration commands" },
        moderation: { enabled: true, name: "Moderation", desc: "Moderate your server easylly with {botName}" },
        levelling: { enabled: true, name: "Levelling", desc: "Creates a rank in your server" },
        utilities: { enabled: true, name: "Utilities", desc: "Some usefull commands", aliases: ["general"] },
        music: { enabled: true, name: "Music", desc: "Listen music with Green-bot" },
        games: { enabled: null, name: "Games", desc: "Have fun with friends using Green-bot" },
        antiraid: { enabled: true, name: "Antiraid", desc: "Protect your server against raiders", aliases: ["protections"] },
        owner: { hide: true, enabled: true, name: "Owner", desc: "Manage your bot with the owner commands" }
    },
    // some usefull links about your bot, if you don't have an information, put null.
    links: {
        support: "https://discord.gg/originop",
        website: "null",
        invite: "https://discord.com/api/oauth2/authorize?client_id=882186415889350656&permissions=8&scope=bot",
        commands: "null"
    },
    //Database
    database: {
        // The url of your mongodb database. Check mongodb.org
        MongoURL: "MONGOURL",
        // If you want to cache the database. For big bots
        cached: false,
        delay: 300000 * 4,
    },

}

const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)

client.on('message', message => {
    if (message.content === "s!help"){
        var emded = new Discord.RichEmbed()
            .setColor("0xFF8000")
            .setTitle("Commandes du bot.")
            .addField("s!rules", "Pour afficher les règle du serveurs", true)
            .addField("s!help", "Pour afficher ce message")
            .setFooter("Bot crée par FirePowers07")
        message.channel.sendEmbed(emded)
    }

    if (message.content === "s!rules"){
        var emded2 = new Discord.RichEmbed()
            .setTitle("Règles du serveurs")
            .setColor("0xFF8000")
            .addField("Interdie d'insulter")
    }
    
    if (message.content === "s!ping"){
        message.channel.sendMessage("pong");
    }

    if (message.content === "ping"){
        message.reply("pong")
    }

    if (message.content === "SolarBot"){
        message.reply("Quoi ?")
    }

    if (message.content === "@SolarBot#3846"){
        message.reply("Quoi ?")
    }

    if (message.content === "@SolarBot"){
        message.reply("Quoi")
    }
    if (message.content === "SolarBot#3846"){
        message.reply("Quoi ?")
    }
    if (message.content === "solarbot"){
        message.reply("Quoi ?")
    }
    if (message.content === "SolarBot, t'es moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "solarbot, t'es moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "solarbot t'es moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "SolarBot, octogone sans règle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "solarbot tes moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "SolarBot tes moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "solarbot, octogone sans règle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "solarbot octogone sans règle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "SolarBot octogone sans règle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "solarbot octogone sans regle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "SolarBot octogone sans regle"){
        message.reply("Pas problème ! Quand tu veux !")
    }
    if (message.content === "tkt SolarBot est là"){
        message.reply("Oué")
    }
    if (message.content === "tkt SolarBot est la"){
        message.reply("Oué")
    }
    if (message.content === "tkt solarbot est la"){
        message.reply("Oué")
    }
    if (message.content === "Tkt solarbot est là"){
        message.reply("Oué")
    }
    if (message.content === "Tkt solarbot est la"){
        message.reply("Oué")
    }
    if (message.content === "SolarBot t’es moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "Solarbot tes moche"){
        message.reply("Mais wsh, tu cherche la baguarre ?")
    }
    if (message.content === "SolarBot t'es beaux :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot t'es un bg :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot t'es un beau gosse :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot t'es beaux."){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot t'es beaux :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot t'es beau :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot t'es beau :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot tes beaux :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot tes beau :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot tes beaux :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot tes beau :)"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot t'es beaux"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot t'es beaux"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot tes beaux"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "SolarBot tes beau"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot tes beaux"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solarbot tes beau"){
        message.reply("Mhhh désolais, je ne suis pas intéressé")
    }
    if (message.content === "solardbot"){
        message.reply("Euhh, Je m'appelle SolarBot ! ( Quel idiot(e) ! )")
    }
    if (message.content === "Solardbot"){
        message.reply("Euhh, Je m'appelle SolarBot ! ( Quel idiot(e) ! )")
    }
    if (message.content === "solardBot"){
        message.reply("Euhh, Je m'appelle SolarBot ! ( Quel idiot(e) ! )")
    }
    if (message.content === "SolardBot"){
        message.reply("Euhh, Je m'appelle SolarBot ! ( Quel idiot(e) ! )")
    }
    if (message.content === "vous faites quoi ?"){
        message.reply("Rien")
    }
    if (message.content === "Vous faites quoi ?"){
        message.reply("Rien")
    }
    if (message.content === "vous faite quoi ?"){
        message.reply("Rien")
    }
    if (message.content === "Vous faite quoi ?"){
        message.reply("Rien")
    }
    if (message.content === "solarbot ca va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "solarbot ca va ?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }

    if (message.content === "SolarBot ca va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "Solarbot ca va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "SolarBot ca va ?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "Solarbot ça va ?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "Solarbot sa va ?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "Solarbot sa va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "solarbot sa va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "SolarBot sa va?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
    if (message.content === "SolarBot ça va ?"){
        random();
        if (randnum == 1){
            message.reply("Bof Bof")
        }
        if (randnum == 2){
            message.reply("Oué et toi ?")
        }
        if (randnum == 3){
            message.reply("Non...")
        }
    }
function random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}
    if (message.content === "solarbot + MEE6 = ?"){
        message.reply("... Toi + ton prof = ?")
    }
    if (message.content === "Solarbot + MEE6 = ?"){
        message.reply("... Toi + ton prof = ?")
    }
    if (message.content === "SolarBot + MEE6 = ?"){
        message.reply("... Toi + ton prof = ?")
    }
    if (message.content === "Solarbot je t'ai acheter des capotes."){
        message.reply("Et moi des tampons.")
    }
    if (message.content === "Solarbot je t'ai acheter des capotes"){
        message.reply("Et moi des tampons.")
    }
    if (message.content === "Solarbot solarbot solarbot"){
        message.reply("STOP SPAMMM !!!!")
    }
    if (message.content === "solarbot solarbot solarbot"){
        message.reply("STOP SPAMMM !!!!")
    }
    if (message.content === "Solarbot solarbot solarbot solarbot solarbot solarbot"){
        message.reply("SPAM SPAM SPAM SPAM SPAM SPAM!!!")
    }
    if (message.content === "solarbot solarbot solarbot solarbot solarbot solarbot"){
        message.reply("SPAM SPAM SPAM SPAM SPAM SPAM!!!")
    }
    if (message.content === "qui connais labominable"){
        message.reply("Oué je sais juste qu'il a pas d'amis")
    }
    if (message.content === "labominable octogone sans règle"){
        message.reply("labominable a dit oui ! ALORS GO !!!")
    }
    if (message.content === "SolarBot tu fais quoi ?"){
        message.reply("Je fais des truc")
    }
    if (message.content === "SolarBot quoi comme truc"){
        message.reply("Des choses")
    }
    if (message.content === "SolarBot quoi comme truc ?"){
        message.reply("Des choses")
    }
    if (message.content === "SolarBot quoi comme truc"){
        message.reply("Des choses")
    }
    if (message.content === "Quoi comme truc ?"){
        message.reply("Des choses")
    }
    if (message.content === "Tu me trouve moche c’est ça ?"){
        message.reply("Peut être")
    }
    if (message.content === "SolarBot au revoir"){
        message.reply("Au revoir.")
    }
    if (message.content === "Solarbot tu m’aime bien ?"){
        message.reply("Ouep ! Car tu m'utilise mais c'est de l'amitié ! HEIN !")
    }

});

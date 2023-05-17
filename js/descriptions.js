function dc(id) {
    var desc = document.getElementById('dc_desc')
    if (id == 'dnd') {
        desc.innerHTML = "This bot contains <b>DnD features</b>! You can: throw dices, create channels for your own games (role 'game-master' needed, ask admin) and invite people to play with you!<br><br><b>Creating your own game room</b> allows you to have your all current games on one server, and thanks to that your friends will have nice private place for role playing or throwing dices so any other player can see.<br><br>There exists <b>special channel</b> visible only for people wanting to play (having role 'invite-me'), on this channel you can see all game invitations<br><br>Reacting to message sent on 'class' channel will give you role depending on your reaction<br>(use as <b>favourite class</b> marker)<br><br>As mentioned before you can <b>throw dices</b> so any player can see it, no more accusations of cheating. Available dices: <b>4,6, 8, 10, 12, 20, 100 and custom</b>. You can use single comment to dice multiple times.<br><br><b>Randomizers</b> - tooles mostly for game masters. Can randomize, name (male or female), fight(random fight appears), meeting(no ideas of how to start side mission?, this will help) or death(you want to kill player in creative way? use this)"
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '400px'
    } else if (id == 'spotted1') {
        desc.innerHTML = "This is bot that creates <b>spotted infrascturcture</b> on your dc server, when it joins it creates 2 channels and 1 role<br><br>1. Spotted channel	- bot sends here anonymous messages after command /spotted was used by member<br>2. Logs channel		- only administrator can see this channel<br>&nbsp;&nbsp;&nbsp;&nbsp;- here are gathered logs of spotted such as author and his message including attachment<br>&nbsp;&nbsp;&nbsp;&nbsp;- this is your only way to punish trolls<br>3. Damn Troll role	- as any one on server can use spotted bot creates role to mark users banned from using spotted (both of them)<br><br><b>NSFW addon</b><br><br>Creates one channel and one role:<br>1. nsfw channel - its just like spotted but for nsfw materials (hidden for every one without role)<br>2. nsfw spotter role - eneables people to use nsfw addon's channel (decide yourself who should have it)<br>"
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '320px'
    } else if (id == 'backup') {
        desc.innerHTML = 'This is BackUp Bot since now all message sent on your server are copied into <b>safe database</b> so you can <b>get them back any time you want</b>. You can also command bot to <b>create beautiful backup</b>, which looks exactly like Discord chat history.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'mod') {
        desc.innerHTML = 'Moderator Bot, it provides you with <b>shedulding streams</b>, <b>live chat only for stream purpose</b> (closes after stream ended), and <b>beautiful backup</b> of those chats.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'spotted2') {
        desc.innerHTML = 'Unsupported verison, pretty similar to worldwide with main diffrence, that you sent message to bot, not by command'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    }
}
function extensions(id) {
    var desc = document.getElementById('chrome_desc')
    if (id == 'bc') {
        desc.innerHTML = 'Better Chromium consists of <b>3 separate extensions: NewTab, Bookmarks, History</b>. Main features such as <b>Notepad, app center or weather app</b> are located in Newtab, the rest of these 3 were written to practice other APIs. NewTab has also built in <b>countdown, stopper and clock.</b>'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'epp') {
        desc.innerHTML = 'Every Project Planned is ment to <b>help you organize your project</b> stuff like: <b>budget, goals, deadlines</b>. It has built in <b>Google Calendar synchronization</b>, and easily accesible <b>notes</b>.(under development, only beta verisons)'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'nt') {
        desc.innerHTML = `Note## is <b>upgraded</b> version of previous "Notepad" extension. It has buit in <b>drawing notes</b>, but so far i haven't implemented <b>"to do"</b> function`
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id  == 'rh') {
        desc.innerHTML = 'Random Hentai is extension that provides you with <b>random post on nhentai.net</b> website. I am yet to add finding <b>cover page</b>, and <b>randomizing with tags</b>.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'he') {
        //Jeżeli strona na którą często wchodzisz posiada elementy które chciałbyś ukryć wypróbuj to rozszerzenie. Wciskając "alt" i klikając w dowolny element sprawisz iż zniknie on na zawsze. No nie na zawsze, jeżeli wejdziesz w okienko popup rozszezenia zobaczysz swoje ukryte elementy i będziesz mógł je przywrócić
        desc.innerHTML = 'Is there any site you enter frequently but has some lements you would like to hide? If yes, try this extensions, by holding "alt" and clicking on element you will make it dissapear for ever. Well not for ever, you will be able to revert changes by entering popup window and deleting element from list.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '70px'
    }
}
function mobile(id) {
    var desc = document.getElementById('mobile_desc')
    if (id == 'clc') {
        desc.innerHTML = 'Calculator is really simple calculator that will be turned into fully fledged app in near future. It was originally build as an quick app to start with cordova.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'nt') {
        desc.innerHTML = 'This Notepad app is just a notepad, but more modern looking, written as localStorage practice with Cordova.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
function template(id) {
    var desc = document.getElementById('html_desc')
    if (id == 'cv') {
        desc.innerHTML = 'CV template. <b>Modern looking, minimalistic</b>, good for every occasion. Convert to <b>PDF</b> or just sent like this'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'github') {
        desc.innerHTML = 'Source code of this page, nothing more.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'shop') {
        desc.innerHTML = 'Complete shop template, someday'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'paint') {
        desc.innerHTML = 'Fully working paint in your browser, <b>draw, erase, write and save</b> all of this just in this little folder'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
function desktop(id) {
    var desc = document.getElementById('desktop_desc')
    if (id == 'snake') {
        desc.innerHTML = 'Snake## is just a <b>snake game</b>. I am not very good at writing games like this, and JS is not typically used for it so snake is actually line drawn in canvas, so are all the obstacles. Yet, due to its simplicity game will <b>run smoothly</b>. You can <b>gather apples</b>, but with every turn you make, you grow more body so you drop them and makes <b>obstacles for yourself</b>. When you hit 2000 points, random <b>obstacles</b> will appear on map. When you hit 5000, you will be able to get <b>power up</b> making you immortal for like 10s. Lastly there is possibility of <b>clearing map</b> at costs of you apples. Enjoy!'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '100px'
    } else if (id == 'RH') {
        desc.innerHTML = 'Random Hentai app originated from, Random Hentai extension, but then all you could do was to get random link. After getting better at JS, i learned about <b>webscraping</b>. So I made that extension was able to get <b>cover and tags of hentai</b>. Unfortunately CORS policy blocked me from porting this to Extension. I decided to make it as <b>desktop app</b>, but for desktop app to be only doing this? No, I <b>added several features</b> like adding hentais to <b>favourite</b> and <b>downloading</b> them without torrent. Also you can randomize your output hentais by <b>tags</b>.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '100px'
    } else if(id == 'MH') {
        desc.innerHTML = 'MangaHouse is online platform for selling/buying mangas and novels. It was written with specialized server. Has prebuilt TTS(text-to-speach) module. You can even comment and rate products.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'dnd') {
        desc.innerHTML = 'DnD## is dnd portal for character sheet building, and online playing. It has a lot of prebuil game function yet still requires game master, there is not turns and there is noting stopping you from making a move out of your turn so the system is very flexible. Yet there will be sont log of every action you take.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '80px'
    } else {
        desc.innerHTML = 'no description yet'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
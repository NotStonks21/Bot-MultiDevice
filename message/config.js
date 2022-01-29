const fs = require('fs')


// APIKEY's
global.APIs = {
      	zeks: 'https://zeks.me',
      	anto: 'https://hardianto.xyz',
        amel : 'https://melcanz.com',
}


// Apikey Website Api
global.APIKeys = {
      	'https://zeks.me': 'BETA',  //REGISTRASI FOR KEY
        'https://hardianto.xyz': 'hardianto',
        'https://melcanz.com' : 'BETA',  //REGISTRASI FOR KEY
}


// Nomor Owner
global.ownerNumber = ["593991398786@s.whatsapp.net","593991398786@s.whatsapp.net"]
global.owner = ["593991398786","593991398786"]


// Nama Bot
global.botName = 'Kitzia - Bot'


// EXIF
global.packname = 'Kitzia Bot'
global.author = '❤️ Multi-Device ❤️'


// OTHERS
global.Prefix = 'Multi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sessionName = 'Dash'
global.Mode = 'Public'
global.mess = {
    admin: 'Características especiales para adm del grupo!',
    botAdmin: 'Los bots deben ser administradores primero!',
    owner: 'Características especiales para Owner Bot',
    group: 'Características utilizadas solo para grupos!',
    private: 'Funciones utilizadas solo para el chat privado!',
    query: 'El comando debe ir acompañado de una consulta..',
    link: 'El comando debe ir acompañado de Link/Url',
    wait: 'Loading...',
    done: 'Logrado..',
    wrongFormat: '¡¡Orden incorrecto!!\n Únete Link después del comando..',
    example1: 'Welcome @user al Grupo @subject No olvides leer las reglas @desc\n\nNota :\n1. @user (Mencionar unirse al usuario)\n2. @subject (Group Name)\n3. @tanggal (Fecha ahora)\n4. @desc (Obtener grupo de descripción)'
,
    example2: 'Good Bye @user del grupo @subject No olvides leer las reglas @desc\n\nNota :\n1. @user (Mencionar unirse al usuario)\n2. @subject (Group Name)\n3. @tanggal (Fecha ahora)\n4. @desc (Obtener grupo de descripción)',
    rules : `Llénate!!`
}


// Path Img/Media
global.pathImg = fs.readFileSync('./media/Dash.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

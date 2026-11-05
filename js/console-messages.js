// Easter eggs: logs one random message to the browser console on page load.

const consoleMessages = [
    '  /\\_/\\  (\n' +
    ' ( ^.^ ) _)\n' +
    '   \\"/  (\n' +
    ' ( | | )\n' +
    '(__d b__)\n',

    '|\\   \\\\\\\\__     o\n' +
    '| \\_/    o \\    o\n' +
    '> _   (( <_  oo  \n' +
    '| / \\__+___/\n' +
    '|/     |/\n',

    '______________\n' +
    '|[]            |\n' +
    '|  __________  |\n' +
    '|  | Java   |  |\n' +
    '|  | Srvl   |  |\n' +
    '|  |________|  |\n' +
    '|   ________   |\n' +
    '|   [ [ ]  ]   |\n' +
    '\\___[_[_]__]___|\n',

    '     __                                                .__              .__   \n' +
    '    |__|____ ___  _______      ________ ____________  _|__|__  _______  |  |\n' +
    '    |  \\__  \\\\  \\/ /\\__  \\    /  ___/  |  \\_  __ \\  \\/ /  \\  \\/ /\\__  \\ |  |\n' +
    '    |  |/ __ \\\\   /  / __ \\_  \\___ \\|  |  /|  | \\/\\   /|  |\\   /  / __ \\|  |__\n' +
    '/\\__|  (____  /\\_/  (____  / /____  >____/ |__|    \\_/ |__| \\_/  (____  /____/\n' +
    '\\______|    \\/           \\/       \\/                                  \\/      \n',

    'braden was here :)',

    'the narwhal bacons at midnight...',

    'Did you know? The first website is still online: http://info.cern.ch/',

    '// TODO: Add more Easter eggs',

    'You’ve entered the matrix... wait, wrong console.',

    '👁️ Looking at the console, are we?',

    'Why are you here? There are no cookies here.',

    '¯\\_(ツ)_/¯',

    'You found a rare candy! 🍬',

    'Braden debugged this. Trust me.',

    'mmm... reddit...',

    'https://discord.gg/NAs8nQw',
]

const randomMessage = consoleMessages[Math.floor(Math.random() * consoleMessages.length)];

console.log(randomMessage)
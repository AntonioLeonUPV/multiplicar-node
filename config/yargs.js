const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 5
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'crea un archivo', opts)
    .command('listar', 'saca en pantalla', opts)
    .help()
    .argv;

module.exports = {
    argv
}
const { resolve } = require('path')

module.exports = {
    root: resolve(__dirname, './src'),
    build: {
        rollupOptions: {
            /*
                Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
                interna de Rollup de Vite.
            */
            input: {
                main: resolve(__dirname, 'src/index.html'),
                main: resolve(__dirname, 'src/Admin.html'),
                main: resolve(__dirname, 'src/borrar.html'),
                main: resolve(__dirname, 'src/borrarj.html'),
                main: resolve(__dirname, 'src/editarperfil.html'),
                main: resolve(__dirname, 'src/invitado.html'),
                main: resolve(__dirname, 'src/jugadores.html'),
                main: resolve(__dirname, 'src/jugadores1.html'),
                main: resolve(__dirname, 'src/jugar.html'),
                main: resolve(__dirname, 'src/logeado.html'),
                main: resolve(__dirname, 'src/partida1.html'),
                main: resolve(__dirname, 'src/partidas.html'),
                main: resolve(__dirname, 'src/partidasj.html'),
                main: resolve(__dirname, 'src/perfil.html'),
                main: resolve(__dirname, 'src/raking.html'),
                main: resolve(__dirname, 'src/rakingj.html'),
                main: resolve(__dirname, 'src/register.html'),
            },
            output: {
                dir: resolve(__dirname, 'build'), //Donde se va a crear el build de nuestra aplicacion
                format: 'es', //Formato de ES modules
            },
        },
        outDir: resolve(__dirname, 'build'),
        //minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
    },
}
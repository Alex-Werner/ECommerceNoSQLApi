/**
 * Grunt Configuration
 */
module.exports = function ( grunt ) {
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        // Documentation
        jsduck: {
            main: {
                options: {
                    "builtin-classes": true,
                    "title": "SkyERP Server",
                    "footer": "Skyline-Creations"
                },
                src: [ "node_modules/skyerp" ],
                dest: "docs/gen"
            }
        },

        nodemon: {
            dev: {
                options: {
                    file: 'node_modules/skyerp/app.js',
                    watchedExtensions: [ "js", "json" ],
                    delayTime: 1,
                    nodeArgs: [ '--debug' ],
                    // legacyWatch: true,
                    env: {
                        PORT: '8081'
                    }
                    // cwd: __dirname
                }
            }
        }
    } );

    // Load the plugin that provides tasks.
    grunt.loadNpmTasks( 'grunt-jsduck' );
    grunt.loadNpmTasks( 'grunt-nodemon' );

    // Registering Default Task
    grunt.registerTask( "server", [ "nodemon:dev" ] );

};
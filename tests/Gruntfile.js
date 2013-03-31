module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: ['../**/*', '!../.meteor/**/*', '!node_modules/**/*'],
            tasks: ['bgShell:runTests']
        },
        bgShell: {
            _defaults: {
                bg: true,
                stdout: true,
                stderr: true,
                fail: true
            },
            startApp: {
                cmd: 'cd ../;' +
                    'METEOR_MOCHA_TEST_DIR=tests/unit ' +
                    'mrt run --port 3000'
            },
            runTests: {
                cmd: 'mocha-phantomjs http://localhost:3000',
                bg: false,
                fail: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'bgShell:startApp',
        'watch'
    ]);
};

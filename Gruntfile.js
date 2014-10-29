module.exports = function(grunt) {
  var jsFiles = 'js/**/*.js';

  // Load all grunt taks matching grunt-*
  require('load-grunt-tasks')(grunt);

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        files: {
          'output/css/site.css': 'scss/main.scss'
        }
      },
      prod: {
        files: {
          'output/css/site.css': 'scss/main.scss'
        },
        options: {
          outputStyle: 'compressed'
        }
      }
    },

    // Lint JS for mistakes
    jshint: {
      dev: {
        src: jsFiles,
        options: {
          force: true
        }
      },
      prod: {
        src: jsFiles,
        options: {
          force: false
        }
      }
    },

    // Concat JS into one file
    concat: {
      dist: {
        src: jsFiles,
        dest: 'output/js/main.js'
      }
    },

    // Minify JS
    uglify: {
      prod: {
        files: {
          'output/js/main.min.js': 'output/js/main.js'
        }
      }
    },

    // Copy inserts to output folder
    // May be replaced with templates one day
    copy: {
      main: {
        src: ['inserts/*', 'strings/*'],
        dest: 'output/'
      }
    },

    // Deploy to FTP test group
    'ftp-deploy': {
      dev: {
        auth: {
          host: 'russellinvestments.roi360.co.uk',
          port: 21,
          authPath: './ftppass.json',
          authKey: 'site'
        },
        src: 'output',
        dest: 'Themes/Russell-Skinning/',
        exclusions: ['.DS_Store', '.keep']
      }
    },

    // Watch for changes and rerun tasks
    watch: {
      sass: {
        files: 'scss/**/*',
        tasks: ['sass:dev', 'ftp-deploy:dev']
      },
      js: {
        files: jsFiles,
        tasks: ['jshint:dev', 'concat', 'ftp-deploy:dev']
      },
      statics: {
        files: ['inserts/**/*', 'strings/**/*'],
        tasks: ['copy', 'ftp-deploy:dev']
      }
    }
  });

  grunt.registerTask(
    'default',
    'Compile files and watch',
    ['sass:dev', 'jshint:dev', 'concat', 'copy', 'ftp-deploy:dev', 'watch']);

  grunt.registerTask(
    'deploy',
    'Compile files ready for deployment',
    ['sass:prod', 'jshint:prod', 'concat', 'uglify', 'copy']);
};

module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['client/js/*.js', 'server/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    concat: {
      js: {
        src: 'client/js/*.js',
        dest: 'public/build.js'
      },
      css: {
        src: 'client/css/*.css',
        dest: 'public/concat.css'
      }
    },

    uglify: {
      jss: {
        files: {
          'public/build.min.js': ['public/build.js']
        }
      }
    },  

    cssmin: {
      css:{
        src: 'public/concat.css',
        dest: 'public/style.min.css'
      }
    },

    watch: {
      files: ['Gruntfile.js', 'client/**/*.js', 'public/**/*.js', 'server/**/*.js'],
      tasks: ['build']
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build',
    ['jshint',
     'concat',
     'uglify',
     'cssmin']
  );

  grunt.registerTask('start',
    ['build',
     'watchst']
  );
};
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  const sass = require('sass')

  grunt.initConfig({
    clean: {
      dist: 'build/',
    },

    babel: {
      options: {
        sourceMap: true,
        compact: true,
        presets: ['@babel/preset-env'],
      },
      dist: {
        files: {
          'build/js/main.js': 'src/js/main.js',
        },
      },
    },

    sass: {
      options: {
        sourceMap: true,
        implementation: sass,
      },
      dist: {
        files: {
          'src/css/main.css': 'src/scss/main.scss',
        },
      },
    },

    autoprefixer: {
      options: {
        browsers: ['opera 12', 'ff 15', 'chrome 25'],
      },
      css: {
        src: 'src/css/main.css',
        dest: 'src/css/main.css',
      },
    },

    cssmin: {
      dist: {
        options: {
          sourceMap: true,
        },
        files: {
          'build/css/main.min.css': 'src/css/main.css',
        },
      },
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: '**/*',
            dest: 'build/img/',
          },
          {
            expand: true,
            cwd: 'src/html/',
            src: '**/*',
            dest: 'build/html/',
          },
          {
            expand: true,
            cwd: 'src/css/',
            src: '**/*',
            dest: 'build/css/',
          },
          {
            expand: true,
            cwd: 'src/scss/',
            src: '**/*',
            dest: 'build/scss/',
          },
          {
            expand: true,
            cwd: 'src/libs/',
            src: '**/*',
            dest: 'build/libs/',
          },
        ],
      },
    },
  })

  const build = ['clean', 'sass', 'autoprefixer', 'cssmin', 'babel', 'copy']

  grunt.registerTask('build', build)
}

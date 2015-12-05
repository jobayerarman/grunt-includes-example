module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Remove built directory
    clean: {
      build: ['dist/']
    },

    // Build the site using grunt-includes
    includes: {
      build: {
        cwd: 'site',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'dist/',
        options: {
          flatten: true,
          includePath: 'include'
        }
      }
    }
  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Task definitions
  grunt.registerTask('build', ['clean', 'less', 'includes']);
  grunt.registerTask('default', ['build']);
};

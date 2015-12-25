module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Remove built directory
		clean: {
			html: ['dist/index.html', 'dist/pages/*.html'],
			css : ['dist/assets/css/']
		},

		// Built stylesheets with less
		less: {
			build: {
				options: {
					paths: ["assets/css"]
				},
				files: {
					"dist/assets/css/main.css": "src/less/*.less"
				}
			}
		},

		// Build the site using grunt-includes
		includes: {
			build: {
				cwd: 'site',
				src: [ '*.html', 'pages/*.html' ],
				dest: 'dist/',
				options: {
					flatten: true,
					includePath: 'site/include'
				}
			}
		},

		watch: {
			html: {
				options: {
					spawn: false
				},
				files: ['site/*.html', 'site/pages/*.html'],
				tasks: ['clean:html', 'includes']
			},
			styles: {
				options: {
					spawn: false
				},
				files: ['src/less/*.less'],
				tasks: ['clean:css', 'less']
			}
		}
	});

	// Load plugins used by this task gruntfile
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Task definitions
	grunt.registerTask('build', ['clean', 'includes']);
	grunt.registerTask('default', ['watch']);
};

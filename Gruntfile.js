module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/**
		* Sass Task
		*/
		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'auto',
				},
				files: {
					'_compiled/style.css': '_scss/style.scss'
				}
			}
		},
		/**
		* Compile JS files
		*/
	    concat: {
	      options: {
	        stripBanners: true
	      },
	      js : {
	        files: {
	          '_compiled/base.js':
	          [
	            '_js/*.js',
	          ]
	        }
	      }
	    },
		/**
		* Minify _compiled JS file
		*/
	    uglify : {
	      js: {
	        files: {
	          '_compiled/base.min.js': ['_compiled/base.js'],
	        }
	      }
	    },
		/**
		* Autoprefixer
		*/
		autoprefixer: {
			options: {
				browsers: ['last 4 versions'],
				map: true,
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: '_compiled/*.css',
				dest: '',
			}
		},
		/**
		* Watch Task
		*/
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			},
			js: {
				files: '_js/*.js',
				tasks: ['concat', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch']);
}
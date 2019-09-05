module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    jsonschema: {
      tests: {
        options: {
          strictKeywords: true
        },
        expand: true,
        "schema.json": ["data/*.json"]
      }
    },
    jshint: {
      dev: [
        "Gruntfile.js",
        "schema.json",
        "data/*.json"
      ],
      options: {
        jshintrc: true
      }
    }
  });
  grunt.loadNpmTasks("grunt-jsonschema-ajv");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerTask("default", ["jshint:dev", "jsonschema:tests"]);
  grunt.registerTask("lint", ["jshint:dev"]);
};

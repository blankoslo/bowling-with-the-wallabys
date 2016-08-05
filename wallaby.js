
module.exports = function (wallaby) {
  return {
    files: [
      'src/*.js'
    ],

    tests: [
      'test/*.js'
    ],

    testframework: 'mocha',

    env: {
    	type: 'node'
    },

    compilers: {
      '**/*.js*': wallaby.compilers.babel({
      	presets: ['es2015-loose']
      })
    }
  };
};
 
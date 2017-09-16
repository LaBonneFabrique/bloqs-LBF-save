/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: declareVariable
 *
 * Bloq type: Statement
 *
 * Description: It declares a new variable called with the given
 *              name and initializes it with the given value.
 *
 * Return type: none
 */

var audioOutput = _.merge(_.clone(StatementBloq, true), {
    name: 'audioOutput',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
            alias: 'text',
            value: 'audioOutput'
        }, {
            alias: 'text',
            value: 'leftOutput'
        }, {
            id: 'ENTREE1',
            alias: 'dynamicDropdown',
            options: 'audios'
        }, {
            alias: 'text',
            value: 'rightOutput'
        }, {
            id: 'ENTREE2',
            alias: 'dynamicDropdown',
            options: 'audios'
        }]
    ],
    createDynamicContent: 'audios',
    returnType: {
      type: 'simple',
      value: 'audio'
    },
    arduino: {
      includes: ['Audio.h',
          'Wire.h'
      ],
      setupExtraCode:'AudioMemory(64);sgtl5000_1.enable();sgtl5000_1.volume(0.8);',
        code: 'AudioOutputI2S i2s1; AudioConnection patchCord27({ENTREE1}, 0, i2s1, 0); AudioConnection patchCord28({ENTREE2}, 0, i2s1, 1); AudioControlSGTL5000 sgtl5000_1; '
    }
});

utils.preprocessBloq(audioOutput);


module.exports = audioOutput;

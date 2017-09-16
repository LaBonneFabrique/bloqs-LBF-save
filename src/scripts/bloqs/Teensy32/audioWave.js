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

var audioWave = _.merge(_.clone(StatementBloq, true), {
    name: 'audioWave',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
            alias: 'text',
            value: 'audioWave'
        }, {
            id: 'NAME',
            alias: 'varInput',
            placeholder: 'bloq-audioWave-default'
        }]
    ],
    createDynamicContent: 'audios',
    returnType: {
      type: 'simple',
      value: 'audio'
    },
    arduino: {
        code: 'AudioSynthWaveformSine sine{NAME};AudioSynthWaveformDc dc{NAME}; AudioEffectMultiply multiply{NAME};AudioConnection patchCordSine{NAME}(sine{NAME}, 0, multiply{NAME}, 0);AudioConnection patchCorddc{NAME}(dc{NAME}, 0, multiply{NAME}, 1);',
        setupExtraCode: 'sine{NAME}.amplitude(0.125);sine{NAME}.frequency(440);dc{NAME}.amplitude(0);'
    }
});

utils.preprocessBloq(audioWave);


module.exports = audioWave;

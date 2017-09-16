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

var audioMixer4 = _.merge(_.clone(StatementBloq, true), {
    name: 'audioMixer4',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
            alias: 'text',
            value: 'Mixer 4 voies'
        }, {
            id: 'NAME',
            alias: 'varInput',
            placeholder: 'bloq-mixer-default'
        }, {
            id: 'ENTREE1',
            alias: 'dynamicDropdown',
            options: 'audios'
        }, {
            id: 'ENTREE2',
            alias: 'dynamicDropdown',
            options: 'audios'
        }, {
            id: 'ENTREE3',
            alias: 'dynamicDropdown',
            options: 'audios'
        }, {
            id: 'ENTREE4',
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
        code: 'AudioMixer4 mixer{NAME}; AudioConnection patchCord{ENTREE1}{NAME}({ENTREE1}, 0, mixer{NAME}, 0); AudioConnection patchCord{ENTREE2}{NAME}({ENTREE2}, 0, mixer{NAME}, 1);AudioConnection patchCord{ENTREE3}{NAME}({ENTREE3}, 0, mixer{NAME}, 2); AudioConnection patchCord{ENTREE4}{NAME}({ENTREE4}, 0, mixer{NAME}, 3);'
    }
});

utils.preprocessBloq(audioMixer4);


module.exports = audioMixer4;

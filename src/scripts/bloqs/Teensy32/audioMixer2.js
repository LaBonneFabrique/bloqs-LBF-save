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

var audioMixer2 = _.merge(_.clone(StatementBloq, true), {
    name: 'audioMixer2',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
            alias: 'text',
            value: 'Mixer 2 voies'
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
        }]
    ],
    createDynamicContent: 'audios',
    returnType: {
      type: 'simple',
      value: 'audio'
    },
    arduino: {
        code: 'AudioMixer4 mixer{NAME}; AudioConnection patchCord{ENTREE1}{NAME}({ENTREE1}, 0, mixer{NAME}, 0); AudioConnection patchCord{ENTREE2}{NAME}({ENTREE2}, 0, mixer{NAME}, 1);'
    }
});

utils.preprocessBloq(audioMixer2);


module.exports = audioMixer2;

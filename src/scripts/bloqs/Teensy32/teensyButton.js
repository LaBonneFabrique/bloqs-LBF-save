/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: number
 *
 * Bloq type: Output
 *
 * Description: It returns the number given.
 *
 * Return type: float
 */

var teensyButton = _.merge(_.clone(OutputBloq, true), {

    name: 'teensyButton',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
          alias:"text",
          value:"le bouton"
        }, {
            id: 'BOUTON',
            alias: 'dynamicDropdown',
            options: 'teensyButtons'
        }]
    ],
    arduino: {includes: ['Bounce.h'
    ],
        needInstanceOf: [{
            name: '{BOUNCEBUTTON}',
            type: 'Bounce',
            equals: 'Bounce({BOUTON}.pin.s],15)'
        }],
        code: ''
    }
});

utils.preprocessBloq(teensyButton);

module.exports = teensyButton;

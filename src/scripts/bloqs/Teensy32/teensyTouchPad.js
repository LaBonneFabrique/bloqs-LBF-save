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

var teensyTouchPad = _.merge(_.clone(OutputBloq, true), {

    name: 'teensyTouchPad',
    bloqClass: 'bloq-zowi-gestures',
    content: [
        [{
          alias:"text",
          value:"read the touch"
        }, {
            id: 'TOUCHPIN',
            alias: 'dynamicDropdown',
            options: 'touchpads'
        }]
    ],
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {includes: ['Audio.h',
        'Wire.h'
    ],
        needInstanceOf: [{
            name: '{TOUCHPIN}',
            type: 'const int',
            equals: 'º[{TOUCHPIN}.pin.s]'
        }],
        code: 'touchRead({TOUCHPIN})'
    },
    python: {
        codeLines: [{
            code: '{VALUE}'
        }]
    }
});

utils.preprocessBloq(teensyTouchPad);

module.exports = teensyTouchPad;

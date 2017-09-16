/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: equalityOperations
 *
 * Bloq type: Output
 *
 * Description: It returns the result of a math comparison between two given values.
 *
 * Return type: bool
 */

var equalityOperations = _.merge(_.clone(OutputBloq, true), {

    name: 'equalityOperations',
    bloqClass: 'bloq-equality-operations',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'string', 'selectVariable', 'readSensor']
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                    label: '=',
                    value: '=='
                }, {
                    label: '!=',
                    value: '!='
                }, {
                    label: '>',
                    value: '>'
                }, {
                    label: '>=',
                    value: '>='
                }, {
                    label: '<',
                    value: '<'
                }, {
                    label: '<=',
                    value: '<='
                }] //'=', '≠', '>', '≥', '<', '≤']
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'string', 'selectVariable', 'readSensor']
        }]
    ],
    code: '({ARG1} {OPERATOR} {ARG2})',
    arduino: {
        code: '({ARG1} {OPERATOR} {ARG2})'
    },
    returnType: {
        type: 'simple',
        value: 'bool'
    }

});

utils.preprocessBloq(equalityOperations);

module.exports = equalityOperations;
const assert = require('node:assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Guilherme', 'Degrecci');
assert.strictEqual(winner, 'Degrecci');

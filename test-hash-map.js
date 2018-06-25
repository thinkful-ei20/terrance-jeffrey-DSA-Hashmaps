'use strict';

const HashMap = require('./hash-map');

const lor = new HashMap();
lor.set('Hobbit', 'Bilbo');
lor.set('Hobbit', 'Frodo');

console.log(lor);

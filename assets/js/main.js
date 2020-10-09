// From mod1, but get its data from mod2.
import { hello1 } from 'core/util';
// From mod1
import { hello2 } from 'core/util';
// From mod2
import * as data from 'core/util/data.json';
// hello3 lives in mod2 which also have a index.js in util.
// But doing import from 'core/util' you will get the index.js file from mod1
// (higher up in the import list), so we need to be explicit:
import { hello3 } from 'core/util/hello3';
// From main
import { hello4 } from './lib';

window.hello1 = hello1;
window.hello2 = hello2;
window.hello3 = hello3;
window.hello4 = hello4;
window.data = data;

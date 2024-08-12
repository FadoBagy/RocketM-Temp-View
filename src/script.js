'use strict';
import { header } from './header.js';
import { accordion } from './accordion.js';
import { astronautMovement } from './animations.js';

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEventListener(type, callback);
    }
}

header(addEventOnElem);
accordion(addEventOnElem);
astronautMovement();
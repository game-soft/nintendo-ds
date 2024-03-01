(function() {
    'use strict';
    var nintendoDsSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return nintendoDsSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = nintendoDsSoftList;
    } else {
        window.gameSoft = {
            NDS: nintendoDsSoftList
        };
    }
})();
;(function ($, window, document, undefined) {
    $.colorTrans = function () {
        var str = arguments[0] || ''; //要转换的字符串
        var bool = arguments[1] || false; //bool为true 从RGB或RGBA转# 为false则从#转RGBA
        var num = [], hex = {};
        var r = 0, g = 0, b = 0, a = 1;
        str = str.toUpperCase(); //统一大写
        if (bool) {
            if (/\((.*)\)/.test(str)) {
                str = str.match(/\((.*)\)/)[1];
                num = str.split(',');
                r = num[0];
                g = num[1];
                b = num[2];
                a = num[3] || a;
                hex = {
                    0: '0',
                    1: '1',
                    2: '2',
                    3: '3',
                    4: '4',
                    5: '5',
                    6: '6',
                    7: '7',
                    8: '8',
                    9: '9',
                    10: 'A',
                    11: 'B',
                    12: 'C',
                    13: 'D',
                    14: 'E',
                    15: 'F'
                };
                r = hex[parseInt(r / 16)] + '' + hex[r % 16];
                g = hex[parseInt(g / 16)] + '' + hex[g % 16];
                b = hex[parseInt(b / 16)] + '' + hex[b % 16];
                return {
                    'COLOR': '#' + r + g + b,
                    'OPACITY': '' + a
                };
            } else {
                console.log('错误的颜色代码，无法转换。');
            }
        } else {
            if (str.indexOf('#') !== -1) {
                str = str.substr(1); //去掉#
            }
            hex = {
                '0': 0,
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '6': 6,
                '7': 7,
                '8': 8,
                '9': 9,
                'A': 10,
                'B': 11,
                'C': 12,
                'D': 13,
                'E': 14,
                'F': 15
            };
            if (str.length === 3 || str.length === 6) {
                num = str.split('');
                if (str.length === 3) { //统一为6位码
                    r = hex[num[0]] * 16 + hex[num[0]];
                    g = hex[num[1]] * 16 + hex[num[1]];
                    b = hex[num[2]] * 16 + hex[num[2]];
                } else {
                    r = hex[num[0]] * 16 + hex[num[1]];
                    g = hex[num[2]] * 16 + hex[num[3]];
                    b = hex[num[4]] * 16 + hex[num[5]];
                }

                return {
                    'STR': r + ',' + g + ',' + b,
                    'RGB': 'RGBA(' + r + ',' + g + ',' + b + ')',
                    'RGBA': 'RGBA(' + r + ',' + g + ',' + b + ',' + a + ')'
                };
            } else {
                console.log('错误的颜色代码，无法转换。');
            }
        }
    }
})(jQuery, window, document);
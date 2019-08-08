/**
 * 四则运算，避免小数点后产生多位数和计算精度损失。
 *
 * @param t ' + - * / '
 * @param i 加数1  | j 加数2
 *        i 被减数 | j 减数
 *        i 被乘数 | j 乘数
 *        i 被除数 | j 除数
 */
fourOp(0.2, '+', .1);  //0.2 + 0.1 = 0.30000000000000004
fourOp(.3, '-', .1);   //0.3 - 0.1 = 0.19999999999999998
fourOp(2.3, '*', 100); //2.3 * 100 = 229.99999999999997
fourOp(.3, '/', .1);   //0.3 / 0.1 = 2.9999999999999996
function fourOp(i, t, j) {
    var b, n1, n2, n3, n4, p, r;
    try {
        n1 = i.toString().split(".")[1].length;
    } catch (e) {
        n1 = 0;
    }
    try {
        n2 = j.toString().split(".")[1].length;
    } catch (e) {
        n2 = 0;
    }
    if (t === '+') {
        b = Math.pow(10, Math.max(n1 + 1, n2 + 1));
        r = (i * b + j * b) / b;
    } else if (t === '-') {
        b = Math.pow(10, Math.max(n1 + 1, n2 + 1));
        p = (n1 >= n2) ? n1 : n2;
        r = ((i * b - j * b) / b).toFixed(p);
    } else if (t === '*') {
        b = 0;
        try {
            b += i.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            b += j.toString().split(".")[1].length;
        } catch (e) {
        }
        r = Number(i.toString().replace(".", "")) * Number(j.toString().replace(".", "")) / Math.pow(10, b);
    } else if (t === '/') {
        n3 = Number(i.toString().replace(".", ""));
        n4 = Number(j.toString().replace(".", ""));
        r = (n3 / n4) * Math.pow(10, n2 - n1);
    }
    return r;
}

toFixed(1.335, 2);  // 1.335.toFixed(2) = 1.33   Chrome
function toFixed(n, s) {
    var t = Math.pow(10, s);
    var d = n * t + 0.5;
    d = parseInt(d, 10) / t;
    return d + '';
}
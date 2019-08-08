//随机字符串生成
function randomStr(num) {
    var arrStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var arrLen = arrStr.length;
    var str = '';
    var arr = arrStr.split('');
    for (var i = 0; i < num; i++) {
        str += arr[parseInt(Math.random() * arrLen)];
    }
    return str;
}
randomStr(64);


//网站：
//9rQrX6ydzDTAQ4fLwUZkAcZ9U8Iqehwtylkc0drTjZZXhvl8qiIclPlpjwNX19Jf    索比光伏网
//ndtWzHfQ5QOMdEVIGoOw2QqmlZBuG6Z7kFDpLb4sTh12dhJDCa0m9GZP1u2vY6b4    北极星光伏网


//公众号：
//bjWFqLooac6ONksfR1YkoXgMYDG92pw0Q5SIBeya97uPgiSzxUsmQvveaugyn7NM    碳银网
//b4bBeQzDvxkKb4w0hSnaft9x9fXQ8BjduYT9idoGsWXBAXTLtNsinP4G1xzYC7C0    碳银光良
//JSp6SkjtVyjCEVT09jtisN6reYwopnJWOal8WSXn4PsWfXWMJmS4In0xeB2rRobF    光伏盒子
//R9Qaf9UI6c1FuKGZOYCGSN9OYaJNHv8FjiTgCVoyzkybP02r6T0tUov0sQwiKR9Y    全民光伏

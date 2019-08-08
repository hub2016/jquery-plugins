//倒计时
var _ordertimer = setInterval(function leftTimer() {
    var leftTime = (new Date('2018-07-04 09:48:00')) - new Date(); //计算剩余的毫秒数
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    if (minutes <= 0 && seconds <= 0) {
        window.clearInterval(_ordertimer);
        _ordertimer = null;
        alert('时间到了');
    } else {
        if (minutes < 19) {
            console.log(('00' + minutes).substr(-2) + ":" + ('00' + seconds).substr(-2));
        }
    }
}, 1000);
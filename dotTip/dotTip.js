;(function ($, window, document, undefined) {
    $.dotTip = function (settings) {
        var sets = $.extend({}, $.dotTip.settings, settings);
        var op = sets.obj_pos || $('#dot'); //存放容器
        var pl = sets.pos_left || 200; //整体定位：距左
        var pt = sets.pos_top || 200; //整体定位：距上
        var dr = sets.dot_radius || 12; //点内直径
        var dp = sets.dot_padding || 5; //点内边距
        var db = sets.dot_border || 2; //点边框宽度
        var la = (sets.line_angle % 180) || 30; //斜线角度
        var lw1 = sets.line_width1 || 80; //线1长度
        var lw2 = sets.line_width2 || 40; //线2长度
        var lc = sets.line_color || "#F1FF11"; //线条颜色、圆点内圈颜色
        var lb = sets.line_bg || "#2050B9"; //圆点外圈颜色
        var ot = sets.obj_text || ""; //文字描述
        var of = sets.obj_font || 20; //文字描述字体大小
        var oc = sets.obj_color || "#FFF"; //文字描述字体颜色
        var ob = sets.obj_bold || "normal"; //文字描述字体粗细
        var od = sets.obj_delay || 0; //延时加载
        var ol = Math.max.apply(null, ot.split('<br>').map(function (value) {
            return value.length;
        })); //文字描述长度，如有换行取最大值

        var rgb = '241, 255, 17';
        if (lc.indexOf('#') !== -1 && $.colorTrans) {
            rgb = $.colorTrans(lc).STR;
        }

        var al = Math.abs(la);
        var l1 = parseInt((dr + dp * 2 + db * 2) / 2); //线1定位：距左
        var t1 = parseInt((dr + dp * 2 + db) / 2); //线1定位：距上

        var l2 = parseInt(Math.cos(Math.PI * al / 180) * lw1 + l1); //线2定位：距左
        var t2 = parseInt(Math.sin(Math.PI * la / 180) * lw1 + t1); //线2定位：距上

        var lt = l2 + lw2 + parseInt(of / 2); //文字定位：距左
        var tt = t2 - parseInt(of / 2); //文字定位：距上

        var stl = '', tal = '';
        if (al > 90) {
            stl = '-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transition:width .5s;transition:width .5s;-webkit-transition-delay:1s;transition-delay:1s;';
            tal = 'text-align:right;';
            lt = l2 - lw2 - (of * ol + parseInt(of / 2)); //文字定位：距左
        } else {
            stl = '-webkit-transition-delay:1s;transition-delay:1s;';
        }
        var l = $('.dot-tip').length, sty = '';
        var dotHtml = '<div class="dot-tip" style="left:' + pl + 'px;top:' + pt + 'px;">';
        dotHtml += '<div class="base" style="border-color:' + lc + ';background-color:' + lb + ';width:' + dr + 'px;height:' + dr + 'px;padding:' + dp + 'px;border-width:' + db + 'px;-webkit-animation:act' + l + ' 1s ease infinite;animation:act' + l + ' 1s ease infinite;">' +
            '<div class="dot" style="background-color:' + lc + ';width:' + dr + 'px;height:' + dr + 'px;"></div>' +
            '</div>';
        dotHtml += '<div class="line line1" style="background-color:' + lc + ';-webkit-transform:rotate(' + la + 'deg);transform:rotate(' + la + 'deg);height:' + db + 'px;left:' + l1 + 'px;top:' + t1 + 'px;"></div>';
        dotHtml += '<div class="line line2" style="background-color:' + lc + ';height:' + db + 'px;left:' + l2 + 'px;top:' + t2 + 'px;' + stl + '"></div>';
        dotHtml += '<div class="text" style="left:' + lt + 'px;top:' + tt + 'px;font-size:' + of + 'px;font-weight:' + ob + ';color: ' + oc + ';' + tal + '">' + ot + '</div>';
        dotHtml += '</div>';
        sty = '@-webkit-keyframes act' + l + ' {0% {border-color: rgba(' + rgb + ', .8);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .8);}50% {border-color: rgba(' + rgb + ', .2);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .2);}100% {border-color: rgba(' + rgb + ', .8);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .8);}}@keyframes act' + l + ' {0% {border-color: rgba(' + rgb + ', .8);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .8);}50% {border-color: rgba(' + rgb + ', .2);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .2);}100% {border-color: rgba(' + rgb + ', .8);box-shadow: 0 0 8px 2px rgba(' + rgb + ', .8);}}';
        $('head').append('<style>' + sty + '</style>');
        op.append(dotHtml);
        var $d = op.find('.dot-tip:last');
        setTimeout(function () {
            $d.find('.line1').css('width', lw1 + 'px');
            $d.find('.line2').css('width', lw2 + 'px');
            $d.find('.base,.text').css('opacity', 1);
        }, od);
    }
})(jQuery, window, document);
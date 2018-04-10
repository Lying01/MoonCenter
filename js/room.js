/**
 * Created by Administrator on 2018/04/10.
 */
window.onload = function() {
    var bh = document.getElementById('body').offsetHeight;
    var hh = document.getElementById('header').offsetHeight;
    var fh = document.getElementById('footer').offsetHeight;
    var sh = bh - hh -fh - 50;
    document.getElementById('content').style.height = sh + 'px';
    // console.log(bh);
    // console.log(hh);
    // console.log(fh);
    // console.log(sh);
}
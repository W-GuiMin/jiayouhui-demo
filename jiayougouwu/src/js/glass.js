$(function () {
    (function () {
        var ulobj = $(".imglist ul");
        var picimg = $(".imgpart .pic img");
        var objimg = $(".imgpart .bigpic img");
        ulobj.on("mouseenter", "li", function () {
            var imgsrc = $(this).children("img").attr("src");
            $(this).addClass("active").siblings().removeClass("active");
            picimg.attr("src", imgsrc);
            objimg.attr("src", imgsrc)
        });
        var pic = $(".imgpart .pic");
        var magnify = $(".imgpart .pic .magnify");
        var bigpic = $(".imgpart .bigpic");
        var objimg = $(".imgpart .bigpic img");
        pic.mousemove(function (e) {
            magnify.show();
            bigpic.show();
            var pagex = e.pageX;
            var pagey = e.pageY;
            var pictop = pic.offset().top;
            var picleft = pic.offset().left;
            var magnifyw = magnify.width();
            var magnifyh = magnify.height();
            var magnifytop = pagey - pictop - magnifyh / 2;
            var magnifyleft = pagex - picleft - magnifyw / 2;
            var picw = pic.width() - magnifyw;
            var pich = pic.height() - magnifyh;
            magnifytop = magnifytop < 0 ? 0 : magnifytop;
            magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
            magnifytop = magnifytop > pich ? pich : magnifytop;
            magnifyleft = magnifyleft > picw ? picw : magnifyleft;
            magnify.css({ top: magnifytop, left: magnifyleft });
            var minl = bigpic.width() - objimg.width();
            var mint = bigpic.height() - objimg.height();
            var objimgl = -magnifyleft * 2;
            var objimgt = -magnifytop * 2;
            objimgl = objimgl < minl ? minl : objimgl;
            objimgt = objimgt < mint ? mint : objimgt;
            objimg.css({ top: objimgt, left: objimgl })
        });
        pic.mouseleave(function () {
            magnify.hide();
            bigpic.hide();
        })
    })();
});
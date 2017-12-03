window.onload = function(){
    (function () {
        //轮播图滚动
        var oBanner = new Swiper('.slider-touch', {
            autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
            autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
            initialSlide :0,//初始显示的li的索引
            speed : 1000,//滑动的速度
            observer:true,//当li节点被修改的时候自动更新Swiper
            observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
            pagination : '.swiper-pagination',//下面的图标跟随切换
            loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
        });

        var mySwiper1 = new Swiper('.advert-pro1', {
            autoplay: 2000,
            initialSlide :0,
            speed : 500,
            observer:true,
            observeParents:true,
            pagination : '.swiper-pagination1',
            loop : true,
            noSwiping : true,//禁止拖动
            //noSwipingClass : 'stop-swiping',//禁止拖动
        });

        var mySwiper2 = new Swiper('.advert-pro2', {
            autoplay: 2000,
            initialSlide :0,
            speed : 500,
            observer:true,
            observeParents:true,
            pagination : '.swiper-pagination2',
            loop : true,
            noSwiping : true,//禁止拖动
        });

        var mySwiper3 = new Swiper('.advert-pro3', {
            autoplay: 2000,
            initialSlide :0,
            speed : 500,
            observer:true,
            observeParents:true,
            pagination : '.swiper-pagination3',
            loop : true,
            noSwiping : true,//禁止拖动
        });

        var mySwiper_secskill = new Swiper(".swiper-secskill",{
            initialSlide:0,
            speed:1000,
            observer:true,
            observeParents:true,
            slidesPerView : 3.5,
        });

        //吸顶盒
        var $search = $("#wrapper .jd-search"),
            $top = $("#top"),
            $sec_H = $(".secskill-timer .sec-h"),
            $sec_M = $(".secskill-timer .sec-m"),
            $sec_S = $(".secskill-timer .sec-s");

        $(window).scroll(function(){
            var scrollTop = $(document).scrollTop();
            scrollTop>0?$search.addClass("sea-bg"):$search.removeClass("sea-bg");

            //top显示影藏
            $top[scrollTop>600?"fadeIn":"fadeOut"]();

        });

        //top点击返回顶部
        $top.click(function () {
            $("html,body").stop().animate({
                scrollTop : 0
            });
        });

        //倒计时
        var endTime = new Date();
            endTime.setFullYear(2017);
            endTime.setMonth(9);
            endTime.setDate(15);
            endTime.setHours(23);
            endTime.setMinutes(0);
            endTime.setSeconds(0);
        var endTimer = endTime.getTime(),
            timmer1 = null;

        //转换时间
        function changeTime(time,hou,min,sec) {
            var nowTime = new Date(),
                secAdd = (time - nowTime.getTime())/1000;
            if (secAdd>0){
                var hours = Math.floor(secAdd/3600);//时
                secAdd = secAdd%3600;
                var minutes = Math.floor(secAdd/60);//分
                var seconds = Math.floor(secAdd%60);//秒
                hou.html(addZero(hours));
                min.html(addZero(minutes));
                sec.html(addZero(seconds));
            }else{
                clearInterval(timmer1);
            }
        };

        timmer1 = setInterval(function () {
            changeTime(endTimer,$sec_H,$sec_M,$sec_S);
        },1000);
        changeTime(endTimer,$sec_H,$sec_M,$sec_S);

        //补0
        function addZero(num) {
            return num<10?"0"+num:""+num;
        }

    })();

}

$(function() {

  var $pageContainer = $('#pageContainer'),
    $pageBanner = $('#pageBanner'),
    pageBannerOriginHeight = 246, //导航栏第一页高度
    pageBannerScrollHeight = 88; //导航栏滚动高度

  /**
   *初始化页面滚动
   */
  $pageContainer.onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    beforeMove: function(index) {
      console.log("before move page index:" + index);
      if (index == 1) {
        $pageBanner.animate({
          'height': pageBannerOriginHeight + 'px'
        });
      } else {
        $pageBanner.animate({
          'height': pageBannerScrollHeight + 'px'
        });
      }
    },
    afterMove: function(index) {
      console.log("after move page index:" + index);
    },
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
  });

  var content = template('page-one');
  $pageContainer.find('section').eq(0).append(content);

});

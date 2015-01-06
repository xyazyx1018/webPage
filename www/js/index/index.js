$(function() {

  var $pageContainer = $('#pageContainer');
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
        $('#pageBanner').animate({
          'height': 246 + 'px'
        });
      } else {
        $('#pageBanner').animate({
          'height': 88 + 'px'
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

});

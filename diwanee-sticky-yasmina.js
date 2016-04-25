

;// STICKY MPU
(function () {
  var offsetTop = 35;
  $('.desktop #ad-above-fold-MPU-holder').dwSticky({offsetTop: offsetTop, $stEnd: $('#ad-SE-holder')});
})();
// eof sticky mpu


// STICKY LB/TOP 
(function () {
  var stickyKickStart = function ($target, $stEnd, offsetBot) {
    offsetBot = offsetBot || 0;
    var jobLB = function () {      
      if ($target.hasClass('observed')){
        $target.parent().css({height:""});
        $target.data('dwSticky').destroy();
        return;
      }
      $target.addClass('observed');
      $target.parent().css({height: $target.parent().outerHeight()});
      $target.dwSticky({$stEnd: $stEnd.eq(0), offsetBot: offsetBot});
    };
    if ($target.find('iframe').length > 0) {
      jobLB();
    }
    else {
      observeDOM($target[0], function () {
        //console.log('obzerved');
        if ($target.find('iframe').length > 0) {
          jobLB();
        }
      });
    }
  };
  var stEndList = [];
  //stEndList = stEndList.concat($(".cc-video article.video figure.video-player").toArray());
  stEndList = stEndList.concat($(".cc-video .ad--subnavigation").toArray());
  stEndList = stEndList.concat($(".cc-article article .w__desk--right").toArray());
  stEndList = stEndList.concat($(".cc-event article .w__desk--right").toArray());
  stEndList = stEndList.concat($(".cc-slideshow article .w__desk--right").toArray());
  stEndList = stEndList.concat($(".tpl-personalityTest-detail article .w__desk--right").toArray());
  stEndList = stEndList.concat($(".tpl-homepage .b__hero--hp").toArray());
  stEndList = stEndList.concat($("body  > .page-wrapper-holder").toArray());
  var $stEndList = $(stEndList);
  // lb
  stickyKickStart($('.desktop #ad-above-fold-LB-holder'), $($stEndList).eq(0));
  // top
  stickyKickStart($('.desktop #ad-top-holder'), $($stEndList).eq(0));
})();
// eof sticky lb/top


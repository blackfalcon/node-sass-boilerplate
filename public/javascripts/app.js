
/////// sticky scroll
// *-------------------------------------------------------------------------------
$(function() {
  var el, top;
  el = $('[data-behavior~=stick-to-top]');
  if (el.length === 0) {
    return;
  }
  top = false;
  return $(window).scroll(function() {
    var windowTop;
    top || (top = el.offset().top - parseInt(el.css('marginTop')));
    windowTop = $(window).scrollTop();
    return el.toggleClass('fixed', windowTop >= top);
  });
});

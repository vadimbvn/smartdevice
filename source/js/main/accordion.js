'use strict';

(function () {
  $(window).resize(function () {
    var width = $('body').innerWidth();
    if (width > 767) {
      $('.sub__list').css('display', 'flex');
    } else {
      $('.sub__list').css('display', 'none');
      $('.page-footer__accordion-link').removeClass('active');
    }
  });

  $(document).ready(function () {
    $('.page-footer__accordion > .page-footer__accordion-list > .sub > .page-footer__accordion-link').click(function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.page-footer__accordion-link').not(this).removeClass('active').next().slideUp();
    });
  });
})();

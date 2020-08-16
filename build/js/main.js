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

'use strict';

(function () {

  var form = document.querySelector('.feedback__form');

  if (form) {
    var clientName = form.querySelector('[name=name]');
    var clientPhoneNumber = form.querySelector('[name=tel]');
    var formQuestion = form.querySelector('[name=your-question]');
    var storage = localStorage.getItem('clientName');
    storage = localStorage.getItem('clientNumber');
    storage = localStorage.getItem('formQuestion');

    var isStorageSupport = true;
    storage = '';

    try {
      storage = localStorage.getItem('clientName');
      storage = localStorage.getItem('clientNumber');
      storage = localStorage.getItem('formQuestion');
    } catch (err) {
      isStorageSupport = false;
    }

    if (storage) {
      clientName.value = storage;
      clientPhoneNumber.value = storage;
      formQuestion.value = storage;
    }

    form.addEventListener('submit', function (evt) {
      if (!clientName.value || !clientPhoneNumber.value || !formQuestion.value) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('clientName', clientName.value);
          localStorage.setItem('clientNumber', clientPhoneNumber.value);
          localStorage.setItem('formQuestion', formQuestion.value);
        }
      }
    });
  }
})();

'use strict';

(function () {
  var link = document.querySelector('.page-header__call-button');
  var popup = document.querySelector('.modal');

  if (popup) {

    var close = popup.querySelector('.modal__close-button');
    var userName = popup.querySelector('[name=user-name]');
    var phoneNumber = popup.querySelector('[name=phone-number]');
    var question = popup.querySelector('[name=user-question]');
    var storage = localStorage.getItem('userName');
    storage = localStorage.getItem('phoneNumber');
    storage = localStorage.getItem('question');

    var isStorageSupport = true;
    storage = '';

    try {
      storage = localStorage.getItem('userName');
      storage = localStorage.getItem('phoneNumber');
      storage = localStorage.getItem('question');
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal-show');
      document.body.style.overflow = 'hidden';

      if (storage) {
        userName.value = storage;
        phoneNumber.focus();
      } else {
        userName.focus();
      }
    });

    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      document.body.style.overflow = 'visible';
    });

    popup.addEventListener('submit', function (evt) {
      if (!userName.value || !phoneNumber.value || !question.value) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('userName', userName.value);
          localStorage.setItem('phoneNumber', phoneNumber.value);
          localStorage.setItem('question', question.value);
          document.body.style.overflow = 'visible';
        }
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.code === 'Escape') {
        evt.preventDefault();
        if (popup.classList.contains('modal-show')) {
          popup.classList.remove('modal-show');
          document.body.style.overflow = 'visible';
        }
      }
    });

    window.addEventListener('click', function (evt) {
      if (evt.target === popup) {
        evt.preventDefault();
        if (popup.classList.contains('modal-show')) {
          popup.classList.remove('modal-show');
          document.body.style.overflow = 'visible';
        }
      }
    });
  }
})();

'use strict';

(function () {
  $(document).ready(function () {
    $('#phone').mask('+7 (999) 999 99 99');
    $('#phone-number').mask('+7 (999) 999 99 99');
  });
})();

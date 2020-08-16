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

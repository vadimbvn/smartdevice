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

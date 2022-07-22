// import throttle from 'lodash.throttle';

// const CONTACT_FORM_KEY = 'feedback-form-state'
// const contactFormEl = document.querySelector('.feedback-form');
// const formData = {};

// const fillContactFormElements = form => {
//     const formData = JSON.parse(localStorage.getItem(CONTACT_FORM_KEY));
//     const formElements = form.elements;

//     console.log(formData);

//     for (const key in formData) {
//         if (formData.hasOwnProperty(key)) {
//             formElements[key].value = formData[key];
//         }
//     }
// }
// fillContactFormElements(contactFormEl);

// const onContactFormChange = event => {
//     const { target } = event;

//     const contactFormValue = target.value;
//     const contactFormName = target.name;

//     formData[contactFormName] = contactFormValue;

//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };
// const onContactFormSubmit = event => {
//     event.preventDefault();
//     localStorage.removeItem(CONTACT_FORM_KEY);
//     event.currentTarget.reset();

//     console.log(formData);
// }
// contactFormEl.addEventListener('change', throttle(onContactFormChange, 1000));
// contactFormEl.addEventListener('submit', onContactFormSubmit);

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

let formData = {};

form.addEventListener('input', inputValue);
form.addEventListener('submit', onSubmitForm);

function onFormData(el) {
  const data = JSON.stringify(formData);
    if(data) {
    
   return localStorage.setItem(el, data);
  } 
};

function dataFromLocalStorage(el) {
    const data = localStorage.getItem(el);

  if (data === null) {
   return el = undefined;
    
  } else {
return JSON.parse(data);
  }
};

const objFromLocalStorage = dataFromLocalStorage('feedback-form-state');

if (objFromLocalStorage) {
  email.value = objFromLocalStorage.email;
  message.value = objFromLocalStorage.message;
  formData = objFromLocalStorage;
} else {
  email.value = '';
  message.value = '';
}

function onSubmitForm(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
  console.log(formData);
};

function inputValue(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value || message.value) {
    formData = {
      email: email.value,
      message: message.value,
    };

    throttle(onFormData, 500)('feedback-form-state', formData);
  }
};
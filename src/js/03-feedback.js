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
        const formEl = e.currentTarget.elements;

    const emailEl = formEl.email.value;
    const messageEl = formEl.message.value;

    if (emailEl === '' || messageEl === '') {
        alert('Всі поля повинні бути заповнені');
    } else if (emailEl !== '' || messageEl !== '') {
        console.log(formData);
    } 

  localStorage.removeItem('feedback-form-state');
  form.reset();
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
}



// import throttle from 'lodash.throttle';

// const CONTACT_FORM_KEY = 'feedback-form-state';
// const contactFormEl = document.querySelector('.feedback-form');
// const formData = {};
// // function onFormData(el) {
// //   const data = JSON.stringify(formData);
// //     if(data) {
    
// //    return localStorage.setItem(el, data);
// //   } 
// // };

// // function dataFromLocalStorage(el) {
// //     const data = localStorage.getItem(el);

// //   if (data === null) {
// //    return el = undefined;
    
// //   } else {
// // return JSON.parse(data);
// //   }
// // };


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

// function addTodo (key, value) {
//   let list = []

//   try { 
//     list = JSON.parse(localStorage.getItem(key))
//   } catch (e) {
//     console.error(e)
//   }

//   list.push(value)
//   localStorage.setItem(key, JSON.stringify(list))
// }

// const onContactFormInput = (event, key, value) => {
//     const { target } = event;

//     const contactFormValue = target.value;
//     const contactFormName = target.name;

//     // formData[contactFormName] = contactFormValue;

//     // localStorage.setItem('feedback-form-state', JSON.stringify(formData));

//     localStorage.setItem(key, localStorage.getItem(key) + value);

// };

// const onContactFormSubmit = event => {
//     event.preventDefault();

//     localStorage.removeItem(CONTACT_FORM_KEY);


//     const formEl = event.currentTarget.elements;

//     const emailEl = formEl.email.value;
//     const messageEl = formEl.message.value;

//     if (emailEl === '' || messageEl === '') {
//         alert('Всі поля повинні бути заповнені');
//     } 
//         console.log(formData);
//     contactFormEl.reset();
    
// }
// contactFormEl.addEventListener('input', throttle(onContactFormInput, 1000));
// contactFormEl.addEventListener('submit', onContactFormSubmit);

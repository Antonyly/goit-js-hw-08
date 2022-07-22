import throttle from 'lodash.throttle';

const CONTACT_FORM_KEY = 'feedback-form-state'
const contactFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillContactFormElements = form => {
    const formData = JSON.parse(localStorage.getItem(CONTACT_FORM_KEY));
    const formElements = form.elements;

    console.log(formData);

    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            formElements[key].value = formData[key];
        }
    }
}
fillContactFormElements(contactFormEl);

const onContactFormChange = event => {
    const { target } = event;

    const contactFormValue = target.value;
    const contactFormName = target.name;

    formData[contactFormName] = contactFormValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onContactFormSubmit = event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  contactFormEl.reset();

  console.log(formData);
}

contactFormEl.addEventListener('input', throttle(onContactFormChange, 1000));
contactFormEl.addEventListener('submit', onContactFormSubmit);
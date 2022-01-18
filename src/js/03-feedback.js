import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-form-state";
const formData = {};


const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form texarea');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

populateTextInput();

function formSubmit(even) {
    even.preventDefault();
    even.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    console.log(formData);
    
};

function formInput(event) {
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
    console.log(formData);
    
}
function populateTextInput() {
  const userData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (userData && Object.values(userData) !== []) {
        form.email.value = userData.email;
        form.message.value = userData.message;
        formData.email = userData.email;
        formData.message = userData.message;
    }
 }
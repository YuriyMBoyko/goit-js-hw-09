const formData = {
  email: "",
  message: ""
}

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const getEmptyData = () => ({
  email: "",
  message: "",
});

const loadFormData = () => {
  if (form) {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData); 
        Object.assign(formData, {...getEmptyData(), ...parsedData});
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
      } catch (error) {
        localStorage.removeItem(localStorageKey);
        Object.assign(formData, getEmptyData());
      }
    }
  }
};

const handleFormInput = (event) => {
  const {name, value} = event.target;

  if (formData.hasOwnProperty(name)) {
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    Object.assign(formData, getEmptyData());
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
};

if (form) {
  loadFormData();

  form.addEventListener('input', handleFormInput);
  form.addEventListener('submit', handleFormSubmit);
}

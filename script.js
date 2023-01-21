const form = document.getElementById('form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', addDay);
form.addEventListener('change', saveOnLocalStorage);

function addDay() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Dia já incluso');
    return;
  }
  nlwSetup.addDay(today);
}

function saveOnLocalStorage() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();

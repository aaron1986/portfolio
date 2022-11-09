//NAVBAR
const toggleButton = document.getElementById('toggle-Button');

const naviList = document.getElementById('navi-List');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})

//SLIDER
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = Array.from(document.querySelectorAll(".dot"));

let slideIndex = 1;

function plusSlides(e) {
  let num;

  if (e.target === prevBtn) num = -1;
  if (e.target === nextBtn) num = 1;

  showSlides((slideIndex += num));
}

function currentSlide(e) {
  if (e.target === dots[0]) showSlides((slideIndex = 1));
  if (e.target === dots[1]) showSlides((slideIndex = 2));
  if (e.target === dots[2]) showSlides((slideIndex = 3));
}

function showSlides(n) {
  const slides = Array.from(document.querySelectorAll(".slide"));

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => slide.classList.remove("is-active"));
  dots.forEach((dot) => dot.classList.remove("is-active"));

  slides[slideIndex - 1].classList.add("is-active");
  dots[slideIndex - 1].classList.add("is-active");
}

prevBtn.addEventListener("click", plusSlides);
nextBtn.addEventListener("click", plusSlides);
dots.forEach((dot) => dot.addEventListener("click", currentSlide));

//CONTACT
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const submitError = document.getElementById('submit-error');


function validateName() {
  const name = document.getElementById('name').value;

  if(name.length <= 1 || name.length >= 30) {

    nameError.innerHTML = ' Name is Required! ';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if(email.length == 0) {
      emailError.innerHTML = 'Email is Required';
      return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = 'email is invalid';
      return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
  return true;
}

function validateSubject() {
  const subject = document.getElementById('subject').value;

  if(subject.length < 10 || subject.length > 50) {
    subjectError.innerHTML = 'Message must contain between 10 and 50 letters';
    return false;
  }
  subjectError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
  return true;
}


function validateform() {
  if(!validateName() || !validateEmail() || !validateSubject()) {
    submitError.innerHTML = 'Please enter correct values';
    return false;
  }

}

document.getElementById("submit-default").addEventListener("click", function(event){
  event.preventDefault()
});

// SET COOKIE
const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((acc, [key, value]) =>({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`
  },
};
const storageType = cookieStorage;
const consentName = 'Cookies Detail';

const showPopUp = () => !storageType.getItem(consentName);
const saveToStorage = () => storageType.setItem(consentName, true);

window.onload = () => {

  const consentPopUp = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');

  const acceptfunction = event => {
    saveToStorage(storageType);
    consentPopUp.classList.add('hidden');
  };
acceptBtn.addEventListener('click', acceptfunction);

  if(showPopUp(storageType)) {
   consentPopUp.classList.remove('hidden');
  }
};


// const contactBtn = document.querySelector("#formBtn");
// contactBtn.addEventListener('click',() => {
//     const text = document.contactName.yourname.value;
//     const Email = document.contactName.yourmail.value;
//     const Subject = document.contactName.subject.value;
//     const message = document.contactName.comment.value;

//     if (text.length === 0) {
//         alert('Please fill in your name');
//         return false;
//     }
//     if (Email.length === 0) {
//         alert('Please fill in an email address');
//         return false;
//     }
//     if (Subject.length === 0) {
//         alert('Please fill in your subject');
//         return false;
//     }
//     if (message.length === 0) {
//         alert('please fill in your comment');
//         return false;
//     }
// });

const MenuContainer = document.querySelector('.menu-container');
const MenuOpen = document.querySelector('.open');
const MenuClose = document.querySelector('.close');

const SPMenu = document.querySelector('.navigation-responsive');			
MenuContainer.addEventListener('click', () => {
    MenuOpen.classList.toggle("active");
    MenuClose.classList.toggle("active");
    SPMenu.classList.toggle("active");
});
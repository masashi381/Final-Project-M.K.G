const contactBtn = document.querySelector("#formBtn");
contactBtn.addEventListener('click',() => {
    const text = document.contactName.yourname.value;
    const Email = document.contactName.yourmail.value;
    const Subject = document.contactName.subject.value;
    const message = document.contactName.comment.value;

    if(text.length === 0){
        alert('Please fill in your name');
        return false;
    }
    if(Email.length === 0){
        alert('please fill in an email address')
        return false;
    }
    if(Subject.length ===0){
        alert('please fill in your subject')
        return false;
    }
    if(message.length ===0){
        alert('please fill in your comment')
        return false;
    }
});

const passwordInput = document.getElementById('password');
const progressBar = document.getElementById("progress-bar").firstElementChild;
const strengthText =  document.getElementById("strength-text");
const confirmPasswordInput = document.getElementById("confirm-password");
const submit = document.getElementById("submit");

passwordInput.addEventListener('input', getStrength);
confirmPasswordInput.addEventListener('input',checkPassword);
    
function getStrength(){
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);

    progressBar.style.width = strength.percentage + '%';
    progressBar.style.backgroundColor = strength.color;
    strengthText.textContent = strength.text;
}      


function getPasswordStrength(password){
    let strength = 0;
    if(password.length >= 6) strength +=1;
    if(/[A-Z]/.test(password)) strength +=1;
    if(/[a-z]/.test(password)) strength +=1;
    if(/[0-9]/.test(password)) strength +=1;
    if(/[\W]/.test(password)) strength +=1;

    const strengthLevel =[
        {percentage:0, color:'red', text:'Very Weak'},
        {percentage:20, color:'orange', text:'Weak'},
        {percentage:40, color:'yellow', text:'Medium'},
        {percentage:60, color:'lightgreen', text:'Strong'},
        {percentage:80, color:'green', text:'Good'},
        {percentage:100, color:'green', text:'Good'}
    ];
    return strengthLevel[strength];
}

function checkPassword(){
    password = passwordInput.value;
    confirmPasswordInput = confirmPasswordInput.value;
    
    if(password != confirmPassword){
        confirmPasswordInput.setCustomValidity('password does not match') ;  
    }
    else{
        confirmPasswordInput.setCustomValidity('');
    }
}

submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        window.location.href = 'nextpage.html';
    } else {
        alert('Passwords do not match. Please try again.');
    }
});
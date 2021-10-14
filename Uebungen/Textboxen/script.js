let inputElements = document.getElementsByTagName('input');

for (let index = 0; index < inputElements.length; index++) {
    const thumbnail = inputElements[index];
    thumbnail.addEventListener('blur', eventInputBlur, false);
}

function eventInputBlur(){
    if (this.value) {
        this.style.background = 'lightgreen';
    } 
}

function send(){
    alert('Daten gesendet');
    for (let index = 0; index < inputElements.length; index++) {
        const element = inputElements[index];
        element.value = '';
        element.style.background = '#f2f2f2';
    }
}

function berechnen(){
    let gebDat = Date.parse(document.getElementById('gebDat').value.trim());      
    let heute = Date.now();
    let ergebnis = heute - gebDat;
    let years = (ergebnis/31536000000).toFixed();
    let months = ((ergebnis%31536000000)/2629800000).toFixed();
    let weeks = (((ergebnis%31536000000)%2629800000)/604800016.56).toFixed();
    let days = ((((ergebnis%31536000000)%2629800000)%604800016.56)/86400000).toFixed();
    alert(`${years} years, ${months} month(s), ${weeks}week(s) and ${days} day(s) since your Birth.\r\rYou are f*ckin old!`);
}

function emailCheck(){
    let mail = document.getElementById('mail').value.trim();
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*  if (!mail.includes('@')) {  */        
    if (!regex.test(mail) && date != null) {
        alert('This is not a valid email address!');
    }
}

function telCheck(){
    let telNr = document.getElementById('tel').value.trim();
    let regex = /[^0-9]/g;
    telNr = telNr.replace(regex, '');
    if (isNaN(telNr) && date != null) {
        alert('This is not a valid phone number!')
    }
    document.getElementById('tel').value = telNr;
}

function nameCheck(){
    let name = document.getElementById('name').value.trim();
    let regex = /^([a-zß-ü]+(['-][a-zß-ü]+)?\s?)*?$/i;
    
    if (!regex.test(name)) {
         alert("This is not a valid name!")    
    }   
}

function checkValidDate(){
    let date = Date.parse(document.getElementById('gebDat').value);
    if (isNaN(date) && date != null) {
        alert('This is not a valid date!')
    }
}
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
    alert(ergebnis + 'ms since your B-Day. You are f*ckin old!');
}

function emailCheck(){
    let mail = document.getElementById('mail').value.trim();
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*  if (!mail.includes('@')) {  */        
    if (!regex.test(mail)) {
        alert('email address is not valid!');
    }
}

function telCheck(){
    let telNr = document.getElementById('tel').value.trim();
    //let regex = /\\|\/|\-|\s+/gi;
    let regex = /[^0-9]/gi;
    telNr = telNr.replace(regex, '');
    if (isNaN(telNr) && date != null) {
        alert('Telephone number is not valid!')
    }
    document.getElementById('tel').value = telNr;
}

function nameCheck(){
    let name = document.getElementById('name').value.trim();
    let minus = 0;
    for (let index = 0; index < name.length; index++) {
        let c = name[index];
        if (!isNaN(c - parseInt(c))) {
            alert('name must not contain a number!');
        }
        else if (c == '-') {
            minus++;
        }
    }
    if (minus > 2) {
        alert("name must only contain a max. of 2 '-'!")
    }
}

function checkValidDate(){
    let date = Date.parse(document.getElementById('gebDat').value.trim());
    if (isNaN(date) && date != null) {
        alert('date is not valid!')
    }
}
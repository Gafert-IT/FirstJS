let mailElement = document.getElementById('txbEmail');
mailElement.addEventListener('blur', func, false);

function changeColorOnMouseOut()
{
    let control = document.getElementById('txbName');
    control.style.background = 'black';
    control.style.color = 'white';

    control = document.getElementById('btn');
    control.style.background = 'red';
    control.style.color = 'blue';
}

function senden()
{
    alert('Formular wurde gesendet!');

    let txbName = document.getElementById('txbName');
    txbName.value = 'Bitte Name eingeben';

    let txbEmail = document.getElementById('txbEmail');
    txbEmail.value = 'Bitte Email Adresse eingeben';

    let name = document.getElementsByName('Name');
    console.log(name[0]);
    for (let index = 0; index < name.length; index++) {
        const element = name[index];
        console.log(element.id);
    }

    let td = document.getElementsByTagName('td');
    for (let index = 0; index < td.length; index++) {
        const element = td[index];
        console.log(element.innerHTML);
    }
}


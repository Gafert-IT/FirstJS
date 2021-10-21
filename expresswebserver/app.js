const { response } = require('express');
let express = require('express');
let app = express();

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);

app.use(express.static(__dirname + '/public'))


/*
// localhost:8080/ => root Verzeichnis wird aufgerufen
app.get('/', anfrageRoot);
// localhost:8080/index.html => index.html Verzeichnis wird aufgerufen
app.get('/index.html', anfrageIndex);

function anfrageRoot(){
    // return something
};
function anfrageIndex(){
    // do something
};
*/

// in einem Schritt:
// localhost:8080/ => root Verzeichnis wird aufgerufen und direkt ausgefuehrt
app.get('/', function (request, response){
    // hier wird Code ausgefuehrt
    response.send('Hello FIU');
});

app.get('/SubmitHello', function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('Hello '+ request.query.benutzername + '! <br/>');
    response.end('Have a great day!');
    console.log('Handles request from ' + request.query.benutzername);
});

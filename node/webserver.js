let http = require('http');
let urlModule = require('url');

let server = http.createServer(anfrage);
server.listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');

function anfrage(request, response){
    let urlParts = urlModule.parse(request.url,true);
    let vorname = urlParts.qery.vorname;

    response.writeHead(200,{'Content-Type': 'Text-Plain'});
    response.end('Hello'+ vorname +'Hello from Node.JS\n');
    console.log('Handled request');
}

/*
http Response Header
1xx => Information
2xx => alles gut 
3xx => Umleitung
4xx => Client-Fehler
5xx => Server-Fehler
*/

// JS Objekt Aufbau
// let JSObject = {'Vorname' : 'Mike', 'Gehalt' : 1000, 'Schueler' : true};
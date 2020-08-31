const http = require("http");
const url = require("url");

const portti = 3001;

const serveri = http.createServer((req, res) => {

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query;
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";
    //200 = kaikki on ok, 401 forbidden 402 not found jne.
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        res.end();

    }

});

serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

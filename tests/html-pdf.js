const fs = require('fs');
const pdf = require('html-pdf');
var html = fs.readFileSync('../public/pages/recetaMedica.html','utf-8');
var options = {format: 'Letter'};

pdf.create(html,options).toFile('prueba.pdf', function(err,res) {
    if(err) return console.log(err);
    console.log(res);
});
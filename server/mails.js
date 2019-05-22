const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'globalmedictest@gmail.com',
        pass: 'equipoAzul'
    }
});

module.exports = transporter;
/*

var mailOptions = {
    from: 'globalmedictest@gmail.com',
    to: 'raulsamuelleos98@gmail.com',
    subject: 'Verificar cuenta',
    html: '<p>Verifique su cuenta en el siguiente link: </p><a href="http://localhost:3000/">Verificar</a>'
}

transporter.sendMail(mailOptions, (error,info)=>{
    if(error)
    {
        console.log(error);
    }else{
        console.log('Email sent: '+ info.response);
    }
});*/
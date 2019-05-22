const router = require('express').Router();
const pool = require('../db/conection');
const mail = require('../server/mails');

//RUTAS
router.get('/',(req,res) => {
    res.sendfile('./public/routing.html');
});
router.post('/addUser',async (req,res)=>{
    existeUs = await addUser(req,res);
    if(!existeUs)
    {
        agregarRol(req);
    } 
});
router.post('/addPac',(req,res)=>{
    addPac(req);
    addUser(req,res);
});
router.post('/loginUser', async (req,res)=>{
    var error = await confirmarLogin(req);
    if(error){
        res.status(400).send({
            message: "Error en Usuario y/o Contrasena"
        });
    }else{
        res.send({
            message: "todo bien"
        });
    }
});
//FUNCIONES
async function confirmarLogin(req){
    var query ="SELECT * FROM usuario WHERE nombreUsuario='"+req.body.user+"' AND password='"+req.body.contra+"'";
    var res = await pool.query(query);
    if(res.length === 1)
        return false;
    else
        return true;
}
async function addPac(req){
    try{
        
    } catch(e){
        console.log(e);
        return;
    }
}
async function addUser(req,res)
{
    try{
        var existeUs = await existeUsuario(req);
        if(existeUs === true)
        {
            console.log('El usuario ya ha sido registrado');
            res.redirect('/test/formulario.html'); 
            return false;
        }
        var existeCor= await existeCorreo(req); 
        if(existeCor === true)
        {
            console.log('El correo ya ha sido registrado');
            res.redirect('/test/formulario.html');
            return false;
        }else{
            await agregarUsuario(req);
            res.redirect('/');
        }
    }
    catch(e){
        console.log(e);
        return;
    }
}
async function agregarRol(req)
{
    var rol = req.body.rol;
    var cedula = req.body.cedula;
    var especialidad = req.body.especialidad;
    var usuario = req.body.usuario;
    if(rol === 'medico')
    {
        var query = "INSERT INTO medico VALUES('"+cedula+"','"+especialidad+"','"+usuario+"')";
        enviarCorreo(req.body.correo);
    }else{
        var query = "INSERT INTO enfermera VALUES('"+cedula+"','"+usuario+"')";
    }
    pool.query(query);
}
function enviarCorreo(correo) {
    var mailOptions = {
        from: 'globalmedictest@gmail.com',
        to: correo,
        subject: 'Confirmacion de Cuenta',
        html: '<p>Verifique su cuenta en el siguiente link: </p><a href="http://localhost:3000/">Verificar</a>'
    }
    mail.sendMail(mailOptions, (error,info)=>{
        if(error)
        {
            console.log(error);
        }else{
            console.log('Email sent: '+ info.response);
        }
    });
}
async function existeUsuario(req) {
    var usuario = req.body.usuario;
    var query = "SELECT * FROM usuario WHERE nombreUsuario= '"+usuario+"'";
    var res = await pool.query(query);
    if(res.length == 0)
    {
        //NO EXISTE EL CORREO Y USUARIO
        return false;
    }
    else{
        return true;
        //YA EXISTE UN CORREO O USUARIO
    }
}
async function existeCorreo(req)
{
    var correo = req.body.correo;
    var query = "SELECT * FROM usuario WHERE email='"+correo+"'";
    var res = await pool.query(query);
    if(res.length == 0)
    {
        //NO EXISTE EL CORREO Y USUARIO
        return false;
    }
    else{
        return true;
        //YA EXISTE UN CORREO O USUARIO
    }
}
async function agregarUsuario(req) {
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var correo = req.body.correo;
    var usuario = req.body.usuario;
    var contrasena = req.body.contrasena;

    var query = "INSERT INTO usuario VALUES('"+usuario+"','"+correo+"','"+contrasena+"','"+nombre+"','"+apellidos+"',0)";
    try{
        var res = pool.query(query);
    }catch(e)
    {
        console.log(e);
    }
}
module.exports = router;
const router = require('express').Router();
const pool = require('../db/conection');
const mail = require('../server/mails');
const path = require('path');
//RUTAS
router.get('/',(req,res) => {
    res.sendfile('./public/routing.html');
});
router.get('/verificar/:user', async(req,res)=>{
    await verificar(req.params.user);
    res.sendfile('./public/pages/verificado.html');
});
router.post('/addUser',async (req,res)=>{
    existeUs = await addUser(req,res);
    if(!existeUs)
    {
        await agregarRol(req);
        res.send({
            message: "Todo bien"
        });
    }else{
        res.status(402).send({
            message: "Usuario y/o correo ya registrados"
        });
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
async function verificar(usuario)
{
    query = "UPDATE usuario SET verificado = 1 WHERE nombreUsuario = '"+usuario+"'";
    await pool.query(query);
}
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
            return true;
        }
        var existeCor= await existeCorreo(req); 
        if(existeCor === true)
        {
            console.log('El correo ya ha sido registrado');
            return true;
        }else{
            await agregarUsuario(req);
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
}
async function agregarRol(req)
{
    var rol = req.body.rol;
    var cedula = req.body.cedula;
    var usuario = req.body.usuario;
    if(rol === 0)
    {
        var especialidad = req.body.especialidad;
        var query = "INSERT INTO medico VALUES('"+cedula+"','"+especialidad+"','"+usuario+"')";
    }else{
        var query = "INSERT INTO enfermera VALUES('"+cedula+"','"+usuario+"')";
    }
    enviarCorreo(req.body.correo,req);
    pool.query(query);
}
function enviarCorreo(correo,req) {
    var mailOptions = {
        from: 'globalmedictest@gmail.com',
        to: correo,
        subject: 'Confirmacion de Cuenta',
        html: '<p>Verifique su cuenta en el siguiente link: </p><a href="http://localhost:3000/verificar/'+req.body.usuario+'">Verificar</a>'
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
    var contrasena = req.body.contra;

    var query = "INSERT INTO usuario VALUES('"+usuario+"','"+correo+"','"+contrasena+"','"+nombre+"','"+apellidos+"',2,0)";
    try{
        pool.query(query);
    }catch(e)
    {
        console.log(e);
    }
}
module.exports = router;
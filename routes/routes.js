const router = require('express').Router();
const pool = require('../db/conection');
const mail = require('../server/mails');
const path = require('path');
//RUTAS
router.get('/',(req,res) => {
    res.sendfile('./public/routing.html');
});
router.post('/crearTexto', async (req,res)=>{
    const fs = require('fs');
    var cadena = req.body.id;
    fs.writeFileSync("./db/"+req.body.usuario+".txt",cadena);
    res.send({
        message: 'Todo bien'
    });
});
router.post('/leerArchivo', async (req,res)=>{
    const fs = require('fs');
    var usuario = req.body.usuario;
    let data = fs.readFileSync("./db/"+usuario+".txt");
    texto = data.toString();
    res.send({
        clave: texto
    })
});
router.get('/verificar/:user', async(req,res)=>{
    await verificar(req.params.user);
    res.sendfile('./public/pages/verificado.html');
});
router.post('/traerInfoConsultas', async (req,res)=>{
    let {usuario} = req.body;
    var query = "SELECT * FROM expediente_consulta WHERE userMedico='"+usuario+"'";
    var resul = await pool.query(query);
    if(resul.length == 0)
    {
        res.status(402).send({
            message: 'No tiene consultas que mostrar'
        })
    }else{
        res.send({
            consultas: resul
        })
    }
    
})
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
router.post('/addPac',async (req,res)=>{
    await addExConsulta(req);
    //addUser(req,res);
    res.send({
        message: "Expediente de consulta realizado"
    });
});
router.post('/loginUser', async (req,res)=>{
    var activado = await cuentaActivada(req);
    if(activado){
        var error = await confirmarLogin(req);
        if(error){
            res.status(400).send({
                message: "Error en Usuario y/o Contrasena"
            });
        }else{
            var medico = await pool.query("SELECT * FROM medico WHERE nombreUsuario = '"+req.body.user+"' ");
            var enfermera = await pool.query("SELECT * FROM enfermera WHERE nombreUsuario = '"+req.body.user+"' ");
            if((medico.length+enfermera.length) == 1)
                res.send({
                    privilegio: 2
                });
            else
                res.send({
                    privilegio: 0
                });
        }
    }else{
        res.status(400).send({
            message: "La cuenta no ha sido activada\nCheca tu correo"
        });
    }
});
router.post('/addUserPac', async (req,res)=>{
    var existe = await agregar_verificarUser(req);
    if(!existe){
        res.send({
            message: "El paciente ha sido dado de alta"
        })
    }else
        res.status(402).send({
            message: "Usuario y/o correo ya registrado"
        });
});
router.post('/disponible',async (req,res) => {
    await usuarioDisponible(req);
    res.send({
        message: 'Todo bien'
    });
});
//FUNCIONES
async function usuarioDisponible(req){
    let query = "UPDATE video_chat SET estado = 1 WHERE nombreUsuario = '"+req.body.user+"'";
    let existe = await pool.query(query);
    console.log(existe);
    if(existe.affectedRows == 0)
    {
        let query = "INSERT INTO video_chat (nombreUsuario,estado) VALUES('"+req.body.user+"',1)";
        res = await pool.query(query);
    }
}
async function cuentaActivada(req){
    var query = "SELECT * FROM usuario WHERE nombreUsuario = '"+req.body.user+"'";
    var res = await pool.query(query);
    if(res[0].verificado == 1)
        return true;
    else
        return false;
};
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
async function addExConsulta(req){
    try{
        var usuario = req.body.nombre;
        var sangre = req.body.sangre;
        var pulso = req.body.pulso;
        var talla = req.body.talla;
        var temperatura = req.body.temperatura;
        var alergias = req.body.alergias;
        var peso = req.body.peso;
        var presion = req.body.presion;
        var malestares = req.body.malestares;

        var userMedico = await randomMedico();
        
        var query = "INSERT INTO expediente_consulta (nombreUsuario,fecha,tipoSangre,alergias,malestar,peso,talla,temperatura,presionArterial,pulsoCardiaco,userMedico) VALUES ('"+usuario+"',NOW(),'"+sangre+"','"+alergias+"','"+malestares+"',"+peso+","+talla+","+temperatura+","+presion+","+pulso+",'"+userMedico+"');";
        pool.query(query);
    } catch(e){
        console.log(e);
        return;
    }
}
async function randomMedico(){
    var query = "SELECT * FROM medico";
    var res = await pool.query(query);
    var random = Math.floor(Math.random() * res.length);
    return res[random].nombreUsuario;
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
async function agregar_verificarUser(req)
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
        var query = "INSERT INTO enfermera VALUES('"+usuario+"','"+cedula+"')";
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
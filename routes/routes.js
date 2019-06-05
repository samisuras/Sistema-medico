const router = require('express').Router();
const pool = require('../db/conection');
const mail = require('../server/mails');
const multer = require('multer');
const upload = multer();
const path = require('path');
//RUTAS
router.get('/',(req,res) => {
    res.sendfile('./public/routing.html');
});
router.get('/receta/diagnostico/:paciente', async(req,res) =>{
    let {paciente} = req.params;
    var query = "SELECT * FROM receta WHERE paciente = '"+paciente+"'";
    let resul = await pool.query(query);
    res.send({
        indicacion: resul[0].indicacion,
        diagnostico: resul[0].diagnostico
    });
});
router.get('/datosReceta/paciente/:paciente', async(req,res) => {
    let {paciente} = req.params;
    var query = "SELECT * FROM expediente_consulta WHERE nombreUsuario = '"+paciente+"'";
    let resul = await pool.query(query);
    res.send({
        nombre: resul[0].nombreUsuario,
        edad: resul[0].edad,
        sexo: resul[0].sexo,
        fecha: resul[0].fecha,
        tipoSangre: resul[0].tipoSangre,
        alergias: resul[0].alergias,
        malestar: resul[0].malestar,
        peso: resul[0].peso,
        talla: resul[0].talla,
        temperatura: resul[0].temperatura,
        presion: resul[0].presionArterial,
        pulso: resul[0].pulsoCardiaco
    })
});
router.get('/datosReceta/medico/:medico', async(req,res) => {
    let {medico} = req.params;

    var query = "SELECT * FROM medico WHERE nombreUsuario = '"+medico+"'";
    let resul = await pool.query(query);
    res.send({
        cedula: resul[0].cedulaProfesional,
        especialidad: resul[0].especialidad,
        medico: medico
    });
});
router.get('/usuarios/sangre', async (req,res) => {
    var query = "SELECT tipoSangre FROM expediente_consulta";
    let resul = await pool.query(query);
    sangre = [];
    for(let i=0;i<resul.length;i++){
        sangre[i] = resul[i].tipoSangre;
    }
    res.send({
        sangre: sangre
    });
});
router.get('/usuarios/userMedico', async(req,res) =>{
    var query = "SELECT userMedico FROM expediente_consulta";
    let resul = await pool.query(query);
    datos = [];
    resul.forEach((e)=>{
        datos.push(e.userMedico);
    });
    res.send({
        datos: datos
    });
});
router.get('/usuarios/malestar', async(req,res) =>{
    var query = "SELECT malestar FROM expediente_consulta";
    let resul = await pool.query(query);
    datos = [];
    resul.forEach((e)=>{
        datos.push(e.malestar);
    });
    res.send({
        datos: datos
    });
});
router.get('/usuarios/especialidad', async(req,res)=>{
    var query = "SELECT especialidad FROM medico";
    let resul = await pool.query(query);
    datos = [];
    resul.forEach((e)=>{
        datos.push(e.especialidad);
    });
    res.send({
        datos: datos
    });
})
router.get('/usuarios/talla', async(req,res)=>{
    var query = "SELECT talla FROM expediente_consulta"
    var resul = await pool.query(query);
    talla = [];
    for(let i=0;i<resul.length;i++){
        talla[i] = resul[i].talla;
    }
    res.send({
        talla: talla
    })
});
router.get('/videoPrueba/:usuario', async (req,res) =>{
    const fs = require('fs');
    var {usuario} = req.params;
    let data = fs.readFileSync("./db/video/"+usuario+"/"+usuario+".txt");
    texto = data.toString();
    res.send({
        video: texto
    })
});
router.get('/datosUsuario/:usuario', async (req,res)=>{
    let {usuario} = req.params;
    var query = "SELECT * FROM usuario WHERE nombreUsuario = '"+usuario+"'";
    let resul = await pool.query(query);
    res.send({
        nombre: resul[0].nombres,
        correo: resul[0].email,
        apellido: resul[0].apellidos,
        usuario: resul[0].nombreUsuario
    });
});
router.get('/pacienteInfo/:usuario', async (req,res)=>{
    let usuario = req.params.usuario;
    var query = "SELECT * FROM expediente_consulta WHERE nombreUsuario = '"+usuario+"'";
    let resul = await pool.query(query);
    res.send({
        nombre: resul[0].nombreUsuario,
        edad: resul[0].edad,
        sexo: resul[0].sexo,
        fecha: resul[0].fecha,
        tipoSangre: resul[0].tipoSangre,
        alergias: resul[0].alergias,
        malestar: resul[0].malestar,
        peso: resul[0].peso,
        talla: resul[0].talla,
        temperatura: resul[0].temperatura,
        presion: resul[0].presionArterial,
        pulso: resul[0].pulsoCardiaco
    });
});
router.get('/llamador/:usuario', async(req,res)=>{
    var {usuario} = req.params;
    var query = "SELECT * FROM notificacion WHERE nombreUsuario = '"+usuario+"'";
    let resul = await pool.query(query);
    res.send({
        receptor: resul[0].usuarioLlamada
    })
});
router.get('/medicos',async (req,res)=>{
    var query = "SELECT * FROM medico WHERE nombreUsuario IN(SELECT nombreUsuario FROM video_chat WHERE estado = 1)"
    let resul = await pool.query(query); 
    res.send({
        medicos: resul
    });
}); 
router.get('/verificar/:user', async(req,res)=>{
    await verificar(req.params.user);
    res.sendfile('./public/pages/verificado.html');
});
router.get('/notificaciones/:usuario', async (req,res)=>{
    let {usuario} = req.params;
    var query = "SELECT * FROM notificacion  WHERE nombreUsuario = '"+usuario+"'";
    let resul = await pool.query(query);
    if(resul.length == 0)
    {
        //no hay notificaciones
        res.status(402).send({
            message: 'no hay notificaciones'
        })
    }else{
        res.send({
            llamadaEntrante: resul[0].usuarioLlamada,
            llamada: 1
        });
    }
});
router.get('/recetaPdf/:paciente', async(req,res) =>{
    let {paciente} = req.params;
    console.log(paciente);
    var query = "SELECT * FROM receta_pdf WHERE paciente = '"+paciente+"'";
    let resul = await pool.query(query);
    if(resul.length > 0)
        res.send({
            pdf: resul[0].receta
        });
    else
        res.status(402).send({
            mensaje: 'No se encontro la receta'
        });
});
router.post('/receta/pdf', async(req,res)=>{
    let {data,paciente} = req.body;
    var query = "INSERT INTO receta_pdf (paciente,receta) VALUES ('"+paciente+"','"+data+"')";
    pool.query(query);
});
router.post('/saveVideo', upload.any() ,async (req,res)=>{
    let {video,medico} = req.body;
    const fs = require('fs');
    var dir = './db/video/'+medico;
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        fs.writeFileSync("./db/video/"+medico+"/"+medico+".txt",video);
    }else{
        fs.writeFileSync("./db/video/"+medico+"/"+medico+".txt",video);
    }
    res.send({
        message: 'Todo bien'
    });
});
router.post('/agregarPaciente_Medico', async (req,res)=>{
    let {nombrePaciente,nombreMedico} = req.body;
    var query = "UPDATE expediente_consulta SET userMedico = '"+nombreMedico+"' WHERE nombreUsuario = '"+nombrePaciente+"'";
    await pool.query(query);
    res.send({
        message: 'todo bien'
    })
});
router.post('/borrarNotificacion',async (req,res)=>{
    let {usuario} = req.body;
    var query = "DELETE FROM notificacion WHERE nombreUsuario = '"+usuario+"'";
    pool.query(query);
}); 
router.post('/notificacionVideo', async(req,res)=>{
    let {usuario,llamador} = req.body;
    var query = "UPDATE notificacion SET llamada = 1, usuarioLLamada = '"+llamador+"' WHERE nombreUsuario = '"+usuario+"'";
    var resul = await pool.query(query);
    if(resul.affectedRows == 0)
    {
        var query = "INSERT INTO notificacion (nombreUsuario,llamada,usuarioLlamada) VALUES('"+usuario+"',1,'"+llamador+"')";
        await pool.query(query);
        res.send({
            message: 'Todo bien'
        });
    }else{
        res.send({
            message: 'Todo bien'
        });
    }
});
router.post('/desconectarUser', async (req,res)=>{
    let {usuario} = req.body;
    var query = "UPDATE video_chat SET estado = 0 WHERE nombreUsuario = '"+usuario+"'";
    await pool.query(query);
    res.send({message: 'Sesion cerrad'});
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
            message: "Se ha enviado un correo para verificar su cuenta\n(El correo podria estar en SPAM)"
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
    var error = await confirmarLogin(req);
    if(error){
        res.status(400).send({
            message: "Error en Usuario y/o Contrasena"
        });
    }else{
        var medico = await pool.query("SELECT * FROM medico WHERE nombreUsuario = '"+req.body.user+"' ");
        var enfermera = await pool.query("SELECT * FROM enfermera WHERE nombreUsuario = '"+req.body.user+"' ");
        var confirmada = await cuentaActivada(req);
        if(confirmada){
            if((medico.length+enfermera.length) == 1)
            res.send({
                privilegio: 2
            });
            else
            res.send({
                privilegio: 0
            });
        }else{
            res.status(400).send({
                message: "La cuenta no ha sido activada\nCheca tu correo\n(Puede estar en la carpeta SPAM)"
            });
        }
    }
});
router.post('/addUserPac', async (req,res)=>{
    let {nombre,apellidos,usuario,correo,contra} = req.body;
    var existeUser = await existeUsuario(req);
    if(!existeUser){
        var existeCor = await existeCorreo(req);
        if(!existeCor)
        {
            var query = "INSERT INTO usuario VALUES ('"+usuario+"','"+correo+"','"+contra+"','"+nombre+"','"+apellidos+"',0,0)";
            await pool.query(query);
            enviarCorreo(correo,req)
            res.send({
                message: 'Paciente registrado\nSe a enviado un correo para confirmar su cuenta\n(El correo podria estar en SPAM)'
            });
        }else
            res.status(402).send({
                message: 'Usuario ya registrado'
            });
    }else{
        res.status(402).send({
            message: 'Usuario ya existente'
        })
    }
});
router.post('/disponible',async (req,res) => {
    await usuarioDisponible(req);
    res.send({
        message: 'Todo bien'
    });
});
router.post('/recetaMedica', async(req,res)=>{
    let {paciente,diagnostico,indicacion,medico} = req.body;
    var query = "INSERT INTO receta (paciente,medico,indicacion,diagnostico) VALUES ('"+paciente+"','"+medico+"','"+indicacion+"','"+diagnostico+"')";
     pool.query(query);
});
router.delete('/notificaciones', async(req,res)=>{
    let {usuario} = req.body;
    var query = "DELETE * FROM notificacion WHERE nombreUsuario='"+usuario+"'";
    pool.query(query);
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
    if(res.length === 1){
        if(res[0].verificado == 1)
            return true;
        else
            return false;
    }else{
        return false;
    }
        
};
async function verificar(usuario)
{
    query = "UPDATE usuario SET verificado = 1 WHERE nombreUsuario = '"+usuario+"'";
    await pool.query(query);
}
async function confirmarLogin(req){
    var query ="SELECT * FROM usuario WHERE nombreUsuario='"+req.body.user+"' AND password='"+req.body.contra+"'";
    var res;
    try{
       res = await pool.query(query);
    } catch(e){
        if(e) return true;
    }
    if(res.length === 1)
        return false;
    else
        return true;
}
async function addExConsulta(req){
    try{
        var usuario = req.body.nombre;
        var {edad,sexo} = req.body;
        var sangre = req.body.sangre;
        var pulso = req.body.pulso;
        var talla = req.body.talla;
        var temperatura = req.body.temperatura;
        var alergias = req.body.alergias;
        var peso = req.body.peso;
        var presion = req.body.presion;
        var malestares = req.body.malestares;
        var query = "INSERT INTO expediente_consulta (nombreUsuario,fecha,tipoSangre,alergias,malestar,peso,talla,temperatura,presionArterial,pulsoCardiaco,edad,sexo) VALUES ('"+usuario+"',NOW(),'"+sangre+"','"+alergias+"','"+malestares+"',"+peso+","+talla+","+temperatura+","+presion+","+pulso+","+edad+",'"+sexo+"');";
        pool.query(query);
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
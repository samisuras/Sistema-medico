var pool = require('../db/conection');
/*var usuario = "Raul_Leo";
var correo = "a@correo.com"
conexion.query("SELECT * FROM usuario WHERE nombreUsuario='"+usuario+"' AND email='"+correo+"'",(err,res,fds) => {
    if(err)
        console.log(err);
    console.log(res.length);
});*/
funcion();

async function funcion() {
    try{
        var result = await pool.query("SELECT * FROM usuario");
        console.log('1');
        var res2 = await pool.query("SELECT * FROM medico");
        console.log('2');
    } catch(err) {

    }
}
//Configuracion de sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'admin', 'a01748293', {
    dialect: 'mysql',
    host: 'database-1.c1glrx0mcfca.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //caracteristicas especiales de la conexion

        }
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
});

//module.exports = sequelize;

const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull: false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

//Prueba de conexion

//Es una promesa, dentro del .then pones lo que debes hacer despues
sequelize.sync()
    .then(resultado=>{
        console.log('conexión exitosa')
    })


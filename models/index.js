var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD 
var url, storage;
if (!process.env.DATABASE_URL) {
  url = "sqlite:///";
  storage = "quiz.sqlite";
} else {
  url = process.env.DATABASE_URL;
  storage = process.env.DATABASE_STORAGE || "";
}
//var sequelize = new Sequelize(null, null, null, {
//  dialect: "sqlite",
//  storage: "quiz.sqlite"
//});
var sequelize = new Sequelize(url, {
  storage :storage,
  omitNull :true
});
// Importar la definicion de la tabla Users de user.js
var User = sequelize.import(path.join(__dirname, 'user'));

// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));


// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
  return Quiz.count().then(function (c) {
    if (c === 0) { // la tabla se inicializa si está vacía 
      return Quiz.bulkCreate([
        { question: 'Capital de Italia', answer: 'Roma' },
        { question: 'Capital de Portugal', answer: 'Lisboa' },
        { question: 'Capital de Chechenia', answer: 'Grozni' }
              
      ]).then(function(){
        console.log('Base de datos inicializada con preguntas');
      });
    }
  });
}).catch(function(error){
  console.log("Error Sincronizando las tablas de la BBDD", error);
  process.exit(1);
});

sequelize.sync().then(function() {
  return User.count().then(function (c) {
    if (c === 0) { // la tabla se inicializa si está vacía 
      return User.bulkCreate([
        { username: 'admin', password: 'rm193210', salt: 'tyrn', isAdmin: true },
        { username: 'oscar', password: 'rm193210', salt: 'akqj', isAdmin: false }
      ]).then(function(){
        console.log('Base de usuarios inicializada');
      });
    }
  });
}).catch(function(error){
  console.log("Error Sincronizando las tablas de la BBDD", error);
  process.exit(1);
});

exports.User = User; // exportar definicion de la tabla User
exports.Quiz = Quiz; // exportar definicion de la tabla Quiz
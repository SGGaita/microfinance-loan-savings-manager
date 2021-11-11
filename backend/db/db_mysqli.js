  
const Mysqli = require('mysqli');

require('dotenv').config()

var Db = process.env.DB
var Db_user = process.env.DBUSER


let conn = new Mysqli({
    Host: 'localhost', // IP/domain name 
    port:'' , // port, default 3306 
    user: Db_user, // username 
    passwd: '', // password 
    db: Db
});

let db = conn.emit(false, '');



module.exports = {
    database: db};

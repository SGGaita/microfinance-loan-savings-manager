  
const Mysqli = require('mysqli');


let conn = new Mysqli({
    Host: 'localhost', // IP/domain name 
    port:'' , // port, default 3306 
    user: 'root', // username 
    passwd: '', // password 
    db: 'capep2'
});

let db = conn.emit(false, '');



module.exports = {
    database: db};

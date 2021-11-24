import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo_db',
    password: ''
});

pool.getConnection((err: any,connection: any) =>{
    if(err){
        console.log(err);
        throw err;
    }
    connection.release();
    console.log('DB is Connected');
});

export default pool;
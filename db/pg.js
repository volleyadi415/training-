const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: '2580',
    database: 'test',
    host: 'localhost',
    port: '5000',
})

pool.connect(()=>{
    console.log(" connection established")
})
module.exports=pool;

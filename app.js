const express =require("express");
const app = express();
const routes = require("./routes/index");
const  pgtools = require("./db/pg");
const config = require("./db/pg");


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/",routes);
const PORT = 2828;
app.listen(PORT,()=>{
    console.log( `This users app listening at : http://localhost:${PORT}`);

});

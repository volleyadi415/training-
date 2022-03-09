class controller {
    static async controller(req,res){
        try{
            var name = req.query.name;
            res.send("name of software :"+name)
        }catch(error){

        }
    }
        static async controller1(req,res){
            try{
                var name1 = req.query.name1;
                res.send("my id name :"+name1)
            }catch(error){
    

}
        }
        static async controller2(req,res){
            try{
                var name2 = req.query.name2;
                res.send("training organization"+name2)
            }catch(error){

            }
            }
            static async controller3(req,res){
                try{
                    var name3 = req.query.name3;
                    res.send("class name"+name3)
                }catch(error){


                }
            }
            static async controller4(req,res){
                try{
                    var name4 = req.query.name;
                    res.send("training project"+name4)
                }catch(error){

                }

}}


module.exports=controller;
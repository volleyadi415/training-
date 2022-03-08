const express= require("express");
const controller =require("../controller/controller");
const router = express.Router();

router.get("/testing1",controller.controller);

router.get("/testing2",controller.controller1)

router.get("/testing3",controller.controller2)

router.get("/testing4",controller.controller3)

router.get("/testing5",controller.controller4)
module.exports =router;
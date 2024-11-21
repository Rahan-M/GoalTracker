const express=require("express");
const router=express.Router();
const {setYGS,dltYGS}=require("../controller/YGSfxns");
router.route('/set').post(setYGS);
module.exports=router;
const express=require("express");
const router=express.Router();
const {setYGS,getYGS,dltYGS}=require("../controller/YGSfxns");
router.route('/set').post(setYGS);
router.route('/get/:year').get(getYGS);
module.exports=router;
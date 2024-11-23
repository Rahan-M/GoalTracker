const express=require("express");
const router=express.Router();
const {setWGS,getWGS,dltWGS}=require("../controller/WGSfxns");
router.route('/set').post(setWGS);
router.route('/get/:year/:weekNo').get(getWGS);
router.route('/rem').delete(dltWGS);
module.exports=router;
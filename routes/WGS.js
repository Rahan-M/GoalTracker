const express=require("express");
const router=express.Router();
const {setWGS}=require("../controller/WGSfxns");
router.route('/set').post(setWGS);
// router.route('/get/:year/:month').get(getMGS);
// router.route('/rem').delete(dltMGS);
module.exports=router;
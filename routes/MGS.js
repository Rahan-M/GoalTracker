const express=require("express");
const router=express.Router();
const {setMGS,getMGS}=require("../controller/MGSfxns");
router.route('/set').post(setMGS);
router.route('/get/:year/:month').get(getMGS);
// router.route('/rem').delete(dltMGS);
module.exports=router;
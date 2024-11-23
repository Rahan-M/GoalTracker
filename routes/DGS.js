const express=require("express");
const router=express.Router();
const {setDGS,getDGS,dltDGS}=require("../controller/DGSfxns");
router.route('/set').post(setDGS);
router.route('/get/:year/:dateCode').get(getDGS);
router.route('/rem').delete(dltDGS);
module.exports=router;
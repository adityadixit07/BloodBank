const express=require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { bloodGroupDetails } = require('../controllers/analyticController');

const router=express.Router();


router.route('/bloodgroup-data').get(authMiddleware,bloodGroupDetails)
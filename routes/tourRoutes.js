const express = require('express');
const router = express.Router();
const {getAllTours,createTour,getTour,updateTour,deleteTour}=require('./../controllers/tourController');
router.route('/').get(getAllTours).post(createTour);
//for optional variable lie :id/ we do :id/:lasun? add? for optional
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
module.exports = router;

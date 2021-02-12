const express = require('express');
const router = express.Router();
const { InquiriesController } = require('../controller');


router.get(['/', '/:id'], InquiriesController.GET);

router.post('/', InquiriesController.POST);

module.exports = router;
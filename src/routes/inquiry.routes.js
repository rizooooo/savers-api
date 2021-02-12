const express = require('express');
const router = express.Router();
const { InquiriesController } = require('../controller');


router.get(['/', '/:id'], InquiriesController.GET);

module.exports = router;
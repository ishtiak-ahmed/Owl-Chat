const router = require('express').Router();
const {sendMessage} = require('../Controllers/MessageController');

router.route('/sendMessage').post(sendMessage)

module.export = router;
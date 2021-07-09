const { loginUser, logOut, registerUser, loadUser } = require('../Controllers/AuthController');

const router = require('express').Router();

router.route('/registerUser').post(registerUser);
router.route('/login').post(loginUser);
router.route("/logOut").get(logOut);
router.route('/loadUser').get(loadUser);

module.exports = router;

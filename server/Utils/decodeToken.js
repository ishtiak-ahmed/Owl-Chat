const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel.js');

const decodeToken = async(token) => {
 const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    return user;
}

module.exports = decodeToken;

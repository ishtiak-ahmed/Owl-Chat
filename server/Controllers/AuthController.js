const User = require("../Models/UserModel");
const generateToken = require('../Utils/generateToken');
const decodeToken = require('../Utils/decodeToken');

const secondsInWeek = 604800;

const catchAsync = fn => {
    return () => {
        fn(req, res, next).catch(err => next(err));
    }
}

exports.loginUser = catchAsync(async(req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && user.MatchPassword(password)){
        const token = generateToken(user._id);

        res.cookie('token', token, {httpOnly: true, maxAge: secondsInWeek * 4 * 1000});

        res.status(200).json({
            success: {
                user: {
                    id: user._id,
                    name: user.fullName,
                    email: user.email
                }
            }
        })
    }else {
        res.status(401).json({status: 'fail', message: 'Invalid email or password'})
    }    
});

exports.registerUser = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    if(newUser){
        const token = generateToken(newUser._id);

        res.cookie('token', token, {httpOnly: true, maxAge: secondsInWeek * 4 * 1000});
        res.status(200).json({
            success: {
                user: {
                id: newUser._id,
                name: newUser.fullName,
                email: newUser.email
                }
            }
        })
    }
})

exports.loadUser = catchAsync(async(req,res,next) => {
    
})

exports.logOut = catchAsync(async(req,res,next) => {
    res.clearCookie('token');
    res.send('You have succesfully log out.')
})
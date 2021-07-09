const User = require("../Models/UserModel");
const generateToken = require('../Utils/generateToken');
const decodeToken = require('../Utils/decodeToken');
const asyncHandler = require('express-async-handler');

const secondsInWeek = 604800;

exports.loginUser = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && user.matchPassword(password)){
        const token = generateToken(user._id);

        res.cookie('token', token, {httpOnly: true, maxAge: secondsInWeek * 4000});
        res.status(200).json({
            success: {
                user: {
                    id: user._id,
                    name: user.fullName,
                    email: user.email,
                }
            }
        })
    }else {
        res.status(401).json({status: 'fail', message: 'Invalid email or password'})
    }    
});

exports.registerUser = asyncHandler(async(req, res, next) => {
    const newUser = await User.create(req.body);
    if(newUser){
        const token = generateToken(newUser._id);

        res.cookie('token', token, {httpOnly: true, maxAge: secondsInWeek * 4000});
        res.status(200).json({
            success: {
                user: {
                id: newUser._id,
                name: newUser.fullName,
                email: newUser.email
                }
            }
        })
    }else{
        res.status(401).json({status: 'fail', message: 'Something went wrong..'})
    }
})

exports.loadUser = asyncHandler(async(req,res,next) => {
    console.log('loading user..')
    res.cookie('ping', 'Setting a ping message');

    const user = await decodeToken(req.cookies.token)
    if(user){
        res.status(201).json({success: {name: user.fullName, email: user.email, id: user._id}})
    }else{
        res.status(400).json({status: 'fail', message: "no user logged in.."})
    }
})

exports.logOut = asyncHandler(async(req,res,next) => {
    console.log(next)
    res.clearCookie('token');
    res.status(202).send('You have succesfully log out.')
})

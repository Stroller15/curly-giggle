import { createConnection } from 'mongoose'
import {asyncHandler} from '../utils/asyncHandler.js'


const registerUser = asyncHandler( async(req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exist - via email and username
    // check for email and avatar
    // create user object - create entry in db
    // remove refresh token and pass field from Response
    // check for user createConnection
    // send res

    const {fullName, email} = req.body;

    console.log(fullName, email);

    // create user
    const {password} = req.body;


})


export {registerUser}
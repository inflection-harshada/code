export const getStudent = async (req) =>{
    return "student.service -got request"
}


import { createJwtToken } from "../common/authorisation.js";

export const loginStudent = async (req) => { 
    const payload = {
        email: req.body.email
    };
    if (req.body.email === "harshada@gmail.com" && req.body.pass === "123456"){
        var token = createJwtToken(payload);
        return{
            Message: "login successful",
            Token: token,

        };
    } else {
        return "Invalid user name or pass";
}
};


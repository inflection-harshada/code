import { getStudent, loginStudent } from "../services/student.service.js";


export const get = async(req, res) => {
    try {
        const response = await getStudent(req);
        res.send({
            Message: response,
            Url : req.baseUrl,
            Method : req.method
        });
    } catch (error) {
        res.send({
            Message: "Unable to process",
            Url : req.baseUrl,
            Method : req.method
        });
    }
  
}
export const login = async (req, res) => {
    try {
        let response = await loginStudent(req);
        res.send({
            Message: response,
            Url : req.baseUrl,
            Method : req.method
        });
    } catch (error) {
        console.log(error);
        res.send({
            Message: "Unable to process",
            Url : req.baseUrl,
            Method : req.method
        });
    }
  
}


export const update = async(req, res) => {
    res.send({
        Message: "student.controller -put requuest",
        Url : req.baseUrl,
        Method : req.method
    });
    
}
export const delet = async(req, res) => {
    res.send({
        Message: "student.controller -delete requuest",
        Url : req.baseUrl,
        Method : req.method
    });
   
}

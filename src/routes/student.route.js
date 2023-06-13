import express from 'express';
import { get, login, update, delet } from "../controller/student.controller.js";
import { authorisation } from '../common/authorisation.js';


export const studentRouter = express.Router()

studentRouter.get('/',authorisation, get)
studentRouter.post('/login',login)
studentRouter.put('/',authorisation,update)
studentRouter.delete('/',authorisation, delet)

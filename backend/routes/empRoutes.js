import {Router} from 'express';
import empModel from '../models/employeeModel.js';
import multer from 'multer';
import path from 'path';

const storageEngine = multer.diskStorage({
    destination: "./uploads",

    filename: (req, file, cb) =>{
        const ext = path.extname(file.originalname);
        const name  = Date.now();
        cb(null, `${name}${ext}`);
    }
})


const checkFileType = (file, cb) =>{
    fileTypes = /jpeg|jpg|png|gif/;
    
    // check file types
    const extName = fileTypes.test(path.extname(file.originalname)).toLocaleLowerCase()

    // check mime types
    const mimeTypes = fileTypes.test(file.mimetype);

    if (mimeTypes && extName){
        return cb(null, true);

    }else{
        cb("Error uploading the Image")
    }
}

const upload = multer({
    storage: storageEngine,
    limits: { fileSize: 1000000 }, 
    fileFilter: (req, file, cb) =>{
        checkFileType(file, cb);
    },});
// const upload = multer({dest:'uploads/'})

const router = Router();

// Get all emloyees
router.get('/', async(req, res) =>{
    try {
        
        const allEmps =  await empModel.find()
        
        res.status(200).json(allEmps)
       
    } catch (error) {
        res.status(400).json({message: "Unable to get Data"});
        console.log(error)
    }
})

// Add a new employee
router.post('/add', upload.single('profilePic'), async(req, res) =>{
    const newEmp = new empModel(req.body);
    console.log(`File Name is${req.file}`)
    console.log(` Text Content ${newEmp}`)

 
    try {
        await newEmp.save();
       
        res.status(201).json(newEmp);
        
    
          
        }
        catch (error) {
        console.log(error)
        res.status(409).json({message: "Bad Request Response"});
        }
    }
        );

// Update Employee
router.get('/manage/:id', (req, res) =>{
    res.send(`This route will help to manage Employees with thier id - ${id}`)
})
// Delete an Employee

export default router;


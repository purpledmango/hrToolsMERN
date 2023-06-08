import HrModel from "../models/hrModel.js";
import bcrypt from 'bcrypt';
import { Router } from "express";


const router = Router();

router.post('/register', async(req, res) => {
   try{
        console.log(req.body)
        const {password, ...hrData} = req.body;
        const hashedPswd = await bcrypt.hash(password, 10);
        const newHr = new HrModel({...hrData, password: hashedPswd});
        const validationResult = newHr.validateSync();

        
        await newHr.save() 
        res.status(200).json({message: "Hr registered successfully!", hr: hrData});
       
    } 
   
   catch (err) {
        console.error(err);
        res.status(500).json({message: err })
}
});

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const hr = await HrModel.findOne({ email });
  
      if (!hr) {
        return res.status(404).json({ message: "HR not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, hr.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Password is valid, proceed with further actions like generating a token or setting session
  
      res.status(200).json({ message: "Login successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred! Please try again" });
    }
  });
  
  
router.get('/hi', async(req, res) => {
    res.send("helllo test route")
 }
 );

export default router
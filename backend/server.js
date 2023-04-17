import express from 'express';
import cors from 'cors';
import connectToDb from './db.js';
import mongoose  from 'mongoose';
import empRoutes from './routes/empRoutes.js'

import path from 'path';
import 'dotenv';

connectToDb();

const PORT = process.env.PORT;

const app = express();



// Middleware
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Stogre Configs


  // Initialize upload middleware

  

// Routes


app.use('/api', empRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is ON and running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import connectToDb from './db.js'
import auth from './routes/auth.js'

import path from 'path';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT;

connectToDb();

const app = express();
// Middleware
// app.use(cors({origin: 'http://localhost:3000'}));
app.set('trust proxy', 1) // trust first proxy
app.use(session({  
  name: `daffyduck`,
  secret: 'some-secret-example',  
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 // 1 min
  } 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', auth);

app.listen(PORT, ()=>{
    console.log(`Server is ON and running on http://localhost:${PORT}`);
});

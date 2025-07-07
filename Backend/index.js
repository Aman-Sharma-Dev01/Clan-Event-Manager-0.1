import express from 'express';
import dotenv from 'dotenv';
const app = express() 
dotenv.config();

const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

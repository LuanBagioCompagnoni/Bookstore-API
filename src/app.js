import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express();
routes(app);
const connection = await connectDatabase();

connection.on('error', (error) =>{
  console.error('Connection error', error);
});

connection.once('open', () => {
  console.log('Connection with database sucefully');
});

export default app;
import express from 'express';
import routes from './routes';

export default function(){
  const port = 3000;
  const app = express();
  
  routes(app);
  
  app.listen(port,()=>{
    console.log(`The tcp server is listing on port ${port}`)
  });
}


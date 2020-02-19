import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

export default function(){
  const port = 3000;
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
  
  routes(app);
  
  app.listen(port,()=>{
    console.log(`The tcp server is listing on port ${port}`)
  });
}


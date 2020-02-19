import { MongoClient, Db } from 'mongodb';
const url = 'mongodb://mongo';
const dbName = 'udp-authoritative';

export type MongoExecuteFunction = (db:Db)=>Promise<any>;

export function Execute<T = any>(func:MongoExecuteFunction){
  return new Promise<T>(async (res,rej)=>{

    MongoClient.connect(url,async (err,client)=>{
      if(err != null){
        rej();
        return;
      }
      
      const db = client.db(dbName);
      try {
        const result = await func(db);
        res(result);
        
      } catch (error) {
        rej();
      } finally{
        client.close();
      }
    });
  });
}
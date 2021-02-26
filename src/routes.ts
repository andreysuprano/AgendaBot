import { Router , Request, Response, NextFunction} from 'express';
import express from 'express';
import { json } from 'body-parser';

const app =  express();
const routes = Router();

routes.use((request:Request,response:Response, next:NextFunction) => {    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');    
    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        return response.status(200).json({});
    }
    next();
});

routes.get('/infra', (request:Request, response:Response)=> {
    return response.json({status:'API is running!'});
})

export default routes;
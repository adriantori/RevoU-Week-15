import { Express } from "express";
import logger from 'morgan';

export default (app: Express) => {
    // app.use(logger('combined', 
    //     {stream: fs.createWriteStream('./access.log', {flags: 'a'})} //create file
    //     {db.insertOne} //push database
    // ))
    app.use(logger('combined'))
}
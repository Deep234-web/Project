import express, {Application , Request, Response, NextFunction} from 'express';
import 'api.java','databse.ts','database.sql';
const app:Application =express();
const add = (a: number,b:number)=>

app.get('/', (req: Request, res: Response, next : NextFunction) => {
    res.send("HELLO");
});

app.listen(5000, () => console.log('Server Running'));


import { Route } from "@codepartnerofficial/mvc-server-mongo";

export const routes:Route[] = [
    {path:'/',method:'get',handlerFunction:(req,res)=>{
        // res.send("Hi");
        res.render('page',{service:'Blockchain Development Service'})
    },name:'home'}
]


import { getRouter, initServer } from "@codepartnerofficial/mvc-server-mongo";
import { DB_CONFIG, SERVER_CONFIG } from "../config/config";
import { routes } from "../route";

let io = initServer(process.cwd(),getRouter(routes),SERVER_CONFIG.port,DB_CONFIG.mongoURI,(socket)=>{
    // TODO: User connected through WebSocket
    socket.on('message',(res)=>{
        // res
    })
})

// export function emitEvent(eventName:string,data:any){
//     // io.emit(eventName,data);
// }



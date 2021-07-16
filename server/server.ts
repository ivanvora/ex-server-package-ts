import Express,{Response,Request,NextFunction} from 'express'

const port = process.env.PORT;

const App = Express()

App.get('/*',(req:Request,res:Response,next:NextFunction)=>{
    res.send('hello world');
})

export type Config ={
    port:number
}

export function serve (config?:Config){
    const p = config?.port??port

    App.listen(p, ()=>{
    console.group()
    console.log('server is started');
    console.log(`PORT:${p}`);
    console.groupEnd()
})
}

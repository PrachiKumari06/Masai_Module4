import  express  from 'express'
import rateLimit from "express-rate-limit"
const app = express()
const port = 3000

//----------------------------------custom middleware-----------------------------------------------------------------
app.use(express.json()) //inbuild middleware
const checkData=(req,res,next)=>{
    if(req.body.name && req.body.age){
        next(); //allow request (if we do not use it it will be infinete loop and hang the laptop by just showing that its loading)
    }
    else{
        res.status(400).json({message:"invalid data incoming........"})
    }
}
app.get('/todo', (req, res) => res.json({message:'Hello World!'}))
app.post('/todo',checkData,(req,res)=>
    res.json({message:"todo added",data:req.body})
)
//--------------------------- using inbuild middleware-------------------------------------------------------------
app.use(express.urlencoded({extended:true}))  //inbuild middleware if we do not write this it will show form submitted but undefined no name ,age show
app.get('/', (req, res) => {
  res.send(`
    <h2>User Form</h2>
    <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="enter name"/><br>
      <input type="number" name="age" placeholder="enter age"/><br>
      <button type="submit">Submit</button>
    </form>
  `);
});
app.post("/submit",(req,res)=>{
    console.log(req.body)
    res.send(`Form received : ${JSON.stringify(req.body)}`)
})
//---------------------------external middleware(we need to install them : Ex: cors ,morgan=>npm i cors )-------------------------------------------------------------
//example:npm i express-rate-limit and importing it 
const l=rateLimit({
    windowMs:1*60*1000,
    max:5,
    message:{
        status:429,
       error:"too many request"
     }
})
app.use(l)
app.get("/l",(req,res)=>{
    res.send("home page")
})
app.get("li",(req,res)=>{
    res.json([
        {id:1,name:"ani"},
        {id:2,name:"prachi"}
    ])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
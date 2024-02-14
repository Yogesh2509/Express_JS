const express=require("express")
const path=require("path")
const app=express();
const port=3000;
const hbs = require("hbs")
//const staticpath=path.join(__dirname,"../public")
//app.use(express.static(staticpath))
const partialpath = path.join(__dirname,"../template/partials")
const templatepath = path.join(__dirname,"../template/views")
app.set('view engine',"hbs")
app.set("views",templatepath)
hbs.registerPartials(partialpath)
app.get("",(req,res)=>{
    res.render("index",{
    stuname : "Yogesh",
    marks : 85
    })
})
app.get("/about",(req,res)=>{
    res.render("about")
})

app.get('/',(req,res)=>{
    res.send("Welcome to Homepage")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
 
})
app.get("/gallery",(req,res)=>{
    res.write("<h1>Hello gallery</h1>")
    res.send("<h1>Welcome to gallery page</h1>")
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"opps page not found"
    })
})
app.listen(port,()=>{
    console.log(`Listening to port number ${port}`)
})
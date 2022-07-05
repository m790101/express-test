const express = require("express")
const app = express()
const exphbs = require("express-handlebars")



app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.render("index")
})

app.get("/about",(req,res) => {
    res.render("about")
})

app.get("/profolio",(req,res) => {
    res.render("profolio")
})

app.get("/contact",(req,res) => {
    res.render("contact")
})

app.listen(3000,() => {
console.log("app is running on http://locoal:3000 ")
})
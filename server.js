const express = require('express')
const bodyParser=require('body-parser')
const path = require('path')
const app=express()
const cors=require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/addPost',function(req,res){
	var data={
		quote:req.body.quote
	}
	console.log(data)
})
//heroku
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(_req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Port Open At ${port}`);
});
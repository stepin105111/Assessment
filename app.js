express = require("express");
app = express();

userDetails = require("./userDetails.json");

app.get("/registration", function(req, res)
{
    uName = req.query.name;
    var flag =0 ;
    for (const key in userDetails)
    {
        if(uName == userDetails[key].name)
        {
            flag == 1;
            res.send("Username Already exists...!")
        }
        
    }
    res.send("Registration Success")
})

// Server Listening
app.listen(3000, function(req, res)
{
    console.log("Server is tiered..!")
})

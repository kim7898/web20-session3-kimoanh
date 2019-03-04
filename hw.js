const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname  , "../session1/index.html" ));
})

for(let k=13;k<=20;k++){
    let str = '/web'+k;
    let str1= "./data"+str+".json";
    app.get(str,function(req,res){
        var li='';
        var data=fs.readFileSync(path.resolve(__dirname,str1));
        var dataArray=JSON.parse(data);
        for(var i=0;i<dataArray.length;i++){
            li+="<li>"+dataArray[i]+"</li>"; 
        }
        res.send("<ul>"+li+"</ul>");
    });
}
app.listen(1998, function(err){
    if(err) console.log(err);
    else console.log("server start success");
})
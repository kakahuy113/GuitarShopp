const express = require('express')
const path = require('path');
const port =  process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/dist/angular-bootstrap-md-app'));

app.get("/*" , (res,req) => {
    res.sendFile(path.join(__dirname + '/dist/angular-bootstrap-md-app/index.hh' ))
});

app.listen(port , () => {
    console.log(`app is listen on ${port}`);
    
})
const http = require("http");
const PORT = 4002;
const apiCalling=require("./apiCalling.js");


const server = http.createServer((req, res) => {
// res.setHeader('Content-Type','application/json');
// res.end('<h2 style="color:red;">Welcome to Node Server</h2>')
if(req.url==='/msg'&& req.method==='GET'){
    res.setHeader("Content-Type","text/html");
    res.end("<h2>Greetings of the day!</h2>");
}
else if(req.url==='/data' && req.method==='POST'){
    res.setHeader('Content-Type','application/json');
    const jsonData={
        name:"rahul",
        branch:"CS",
        college:"ABES Engineering College"
    }
    res.end(JSON.stringify(jsonData));
}
else if(req.url==='/data' && req.method==='GET'){
    res.setHeader('Content-Type','application/json');
    const data=apiCalling(20,5);
    res.end(JSON.stringify(data));
}







else{
    res.setHeader("Content-Type","text/html");
    res.end('<h2 style="color:red;">Invalid Request!</h2>')
}

});

server.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});

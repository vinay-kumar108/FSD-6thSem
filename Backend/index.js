const http = require("http");
const PORT = 4004;
const fs = require('fs').promises;
const apidata = require("./apiCalling");
const {
  dataWrite,
  dataRead,
  deleteFile,
  readFileASync,
} = require("./usefsmodule");
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // res.setHeader('Content-Type','application/json');
  // res.end("<h2 style=color:red>Welcome to Node Server</h2>");
  if (req.url == "/msg" && req.method == "GET") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>Greeting of the day!!!</h2>");
  } else if (req.url == "/data" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = {
      name: "rahul",
      branch: "CS",
      college: "ABES Engineering College",
    };
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/apidata" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = await apidata();
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/datawrite" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = dataRead();
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/dataread" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = dataRead();
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/datadelete" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = deleteFile();
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/asyncread" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    const jsondata = await readFileASync();
    res.end(JSON.stringify({ msg: jsondata }));
  } else if (req.url == "/register" && req.method == "POST") {
    let arr = [];
    let body = "";
    req.on("data", (chunck) => {
      body += chunck;
    });

    req.on("end", async () => {
      const { name, email, password } = JSON.parse(body);
      // console.log(` ${name}  ${email}  ${password} `);

      const fdata = await fs.readFile("student.json", { encoding: "utf-8" });
      arr = JSON.parse(fdata);
      const status = arr.find((ele) => ele.email === email);
      if (status) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ msg: "student already exists!" }));
      } else {
        arr.push({ name, email, password });
        await fs.writeFile("student.json", JSON.stringify(arr, null, 2));

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ msg: "student registeres successfully!" }));
      }
    });
  } 
  
  else if (req.url == "/login" && req.method == "POST"){
    let arr = [];
    let body = "";
    req.on("data", (chunck) => {
      body += chunck;
    });
    req.on("end", async () => {
      const { name, email, password } = JSON.parse(body);
      // console.log(` ${name}  ${email}  ${password} `);

      const fdata = await fs.readFile("student.json", { encoding: "utf-8" });
      arr = JSON.parse(fdata);
      const status = arr.find((ele) => ele.email === email && ele.password === password);
      if(status){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({ msg: "Login Success!" }));
      }
      else{
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({ msg: "Invalid user!" }));
      }
    });

  }


  else {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2 style=color:red>Invalid request</h2>");
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});

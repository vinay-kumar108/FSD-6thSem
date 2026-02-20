const fs=require('fs')
const fs1=require('fs').promises

function dataWrite(){
    let statusmsg="";
    try{
    fs.writeFileSync('studentdata.txt',"Welcome to FS module in NODE ")
    console.log("Data written successfully!!!")
    statusmsg="Data written successfully!!!";
    }catch(e){
        console.log(e)
        statusmsg="Error is:"+e;
    }
return statusmsg
}
module.exports=dataWrite;
const fs=require('fs')
const fs1=require('fs').promises;

function dataWrite(){
    let statusmsg="";
    try{
    fs.writeFileSync('studentdata.txt',`
        Welcome to FS module in NODE  
        its Vinay here`)
    console.log("Data written successfully!!!")
    statusmsg="Data written successfully!!!";
    }catch(e){
        console.log(e)
        statusmsg="Error is:"+e;
    }
return statusmsg
}

function dataRead(){
    let statusmsg="";
    try{
        const fdata=fs.readFileSync('studentdata.txt',{encoding:'utf-8'});
        statusmsg=fdata;
    }
    catch(e){
        statusmsg=e;
    }
    return statusmsg;
};

function deleteFile(){
    let statusmsg="";
    try{
        fs.unlinkSync('studentdata.txt');
        statusmsg = 'File deleted successfully';
    }
    catch(e){
        statusmsg= 'error during deletion: '+e;
    }
    return statusmsg;
};

async function readFileASync(){
    console.log('running');
    try{
         statusmsg=await fs1.readFile('student.json',{encoding:'utf-8'});

    }catch(e){
        statusmsg=e;

    }
    return statusmsg;
}


const obj={dataWrite,dataRead,deleteFile,readFileASync};

module.exports=obj;
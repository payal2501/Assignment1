//CREAT DIRECTORY
const fs=require('fs');
 fs.mkdir("payal",function(err){
     if(err){
         console.log(err);
     }else{
         console.log("file created sucessfully");
     }
 });

 //REMOVE DIRECTORY
 fs.rmdir("payal",function(err){
     if (err) {
    console.log(err);
    }else{
         console.log("file sucessfully");
    }
 });

 //WRITE FILE
 fs.writeFile("Q1.txt","master of computer application",function(err){
     if(err){
         console.log(err);
     }else{
         console.log("file saved");
     }
 });

 //READ FILE
 fs.readFile("Q1.txt","utf8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//DELETE FILE
fs.unlink("Q1.txt",function(err){
    if(err)throw err;
    console.log("file Deleted!");
});

//APPEND DATA TO FILE
fs.appendFile("Q1.txt","Department of computer computer science",function(err){
    if (err) throw err;
    console.log('saved');
});


//UPDATE/REPLACE FILE WITH NEW DATA
fs.writeFile("Q1.txt","Department of computer science,VNSGU",function(err){
    if (err) throw err;
    console.log('REPLACED');

});


//RENAME FILE
fs.rename("Q1.txt","p1.txt",function(err){
    if(err) throw err;
    console.log("file Renamed");
});
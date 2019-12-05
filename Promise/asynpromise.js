asyn function spam(){
    let promise = new Promise((resolve,reject))
    {
        setTimeout(()=> 
        resolve("done"),5000)
    });
    let "hw" = await promise;

    console.log(result); //it will be printed after 5 seconds
    console.log("hw");
    console.log("hw");

} 
foo();
console.log("hw");//it will be printed first
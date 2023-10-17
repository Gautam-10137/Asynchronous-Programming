const promiseOne=new Promise(function(resolve,reject){
    // Do an async work
    // DB call, cryptographic, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
        reject();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise complete")
})

new Promise(
    function(resolve,reject){
        setTimeout(function(){
            console.log("Asyn task 2")
            resolve();
        },1000)
    }
).then(function(){
    console.log("promise 2 completed");
})

new Promise(function(resolve,reject){

    setTimeout(function(){
         console.log("Async task 3");
         resolve({userName:'Gautam',rollNo:11212529});
    },2000);

}).then(function(user){
    console.log(user);
})

// creating chaining of resolve functions
const promiseFour=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        setTimeout(()=>{
            console.log("Promise 4");
            resolve({userName:'Gautam',class:'BTech'});
    },3000);
       
    }
    else{
        reject('Error: Something went wrong');
    }
})

promiseFour.then(function(user){
    console.log("promise 4",user);
    return user.userName;
})
.then(
    function(userName){
       console.log("promise 4",userName);
    }
)
.catch(
     function(e){
        console.log(e);
     }
)
// fetch('https://api.github.com/users/Gautam-10137')
// .then(
//     function(res){
//         console.log({res});
//         console.log("success");
//     }
// ).catch(
//     function(e){
//        console.log(e);
//     }
// )

async function fetchData(){
    let response= await fetch('https://api.github.com/users/Gautam-10137');
    console.log(response);
}

fetchData();

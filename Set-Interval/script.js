let randomColor=function(){
    
    let hexCode='0123456789abcdef';
    let hexColor='#';
    for(let i=0;i<6;i++){
        let idx=Math.floor(Math.random() * 16);
        hexColor+=hexCode[idx];
    }
   console.log(hexColor);

    return hexColor;
}
let IntervalId=null;
function startChangingColor(){
  if(IntervalId==null){
    IntervalId=setInterval(
    ()=>{document.body.style.backgroundColor=randomColor();}
    ,1000)
  }
} 
function stopChangingColor(){
     clearInterval(IntervalId);
     IntervalId=null;
}

document.querySelector('.start').addEventListener(
    'click',startChangingColor);

    document.querySelector('.stop').addEventListener(
        'click',stopChangingColor);

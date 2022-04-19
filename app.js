let calcBtn= document.getElementById("btn")
let weight= document.getElementById("weight")
let height= document.getElementById("height")
let result= document.getElementById("result")
let advice= document.getElementById("advice")


const clicked =()=>{
        let newWeight = weight.value
        ;
        let newHeight = height.value;
        // newWeight  =90;
        // newHeight =10;
        let final = eval( newWeight/(newHeight*newHeight));
        result.value= final.toFixed(2);

//          const adviceValue =()=>{

//                 if(final==100){
//                         advice.innerText = "Out of range";
//                         advice.style.color="black";
//                 }
//                 if(final > 25){
//                 advice.innerText = " You are over-weight, try to see a doctor";
                
//                 advice.style.color="red";

//                 }

//                 else if( final>2){
//                         advice.innerText = " You are Healthy, Maintain your Weight";
//                         advice.style.color="red";
//                 }

//                 else if(final>1 && final<1.9){
//                         advice.innerText = " You are underweight";
//                         advice.style.color="black";
//                 }
        
//                 else{
//                         advice.innerText = " Go for A medical check up";
//                         advice.style.color="black";
//                 }
        // }
      
//          console.log(adviceValue());
};

const reload =()=>{
        window.location.reload()
}

calcBtn.addEventListener("dblclick", reload);
calcBtn.addEventListener("click", clicked);

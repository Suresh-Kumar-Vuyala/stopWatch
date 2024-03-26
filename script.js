const B1=document.querySelector("#B1")
const B2=document.querySelector("#B2")
const B3=document.querySelector("#B3")
console

const time=document.querySelector(".container p")
//---------------------------------------------------------->>>>>>>>>>>
let timer=null


//==================================================================>>>>>>>>>>>.

let [hours,minutes,seconds]=[0,0,0]

B3.addEventListener("click",()=>{
    console.log(B3)
    hours=0;
    minutes=0;
    seconds=0;
    time.innerText="00:00:00"
    if(timer!=null){
        clearInterval(timer)
    }
    timer=null

})
//----------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

function countDown(){
           seconds++;
           if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
                if(hours==24){
                    hours=0;
                }
            }
           }
    let s=seconds
    if(seconds<10){
            s='0'+s
    }
    let m=minutes
    if(m<10){
        m='0'+m
    }
    let h=hours
    if(h<10){
        h='0'+h
    }

    time.innerText=h+":"+m+":"+s
   

}
//------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
B2.addEventListener("click",()=>{
       if(timer==null){
              timer=setInterval(countDown,1000);
       }
})

//=================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

B1.addEventListener("click",()=>{
    if(timer!=null){
        clearInterval(timer)
    }
    timer=null
})
const seconds = document.querySelector('.seconds  .number')
minute = document.querySelector('.minute  .number') 
  hours = document.querySelector('.hours .number') 
  days = document.querySelector('.days  .number') 


 let seValue = 11,
  minValue = 60,
  hourvalue =2,
  dayvalue = 9;


  const timeFunction = setInterval( () =>{
    seValue -- ;
 if(seValue === 0){
   minValue --;
    seValue = 60;
 }
 if( minValue  === 0){
 hourvalue --;
 minValue = 60;
 }
 if ( hourvalue === 0){
    dayvalue --;
    hourvalue = 2
 }           
 if( dayvalue === 0){
 clearInterval(timeFunction )
 }
    seconds.textContent = seValue < 10 ? `0${seValue}` : seValue;
    minute.textContent = minValue < 10 ? `0${minValue }` : minValue ;
    hours.textContent = hourvalue < 10 ? `0${hourvalue }` : hourvalue ;
    days.textContent = dayvalue < 10 ? `0${dayvalue}` : dayvalue ;
    
  },1000);

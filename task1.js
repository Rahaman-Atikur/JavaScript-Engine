const tellJoke =()=>{
    let count = 0;

  const stop=setInterval(()=>{
       count++;
      console.log("Why don't scientist trust atoms.Because they make up everything\n");
      if(count ===5){
      clearInterval(stop);
   }
   },2000)
}
tellJoke();
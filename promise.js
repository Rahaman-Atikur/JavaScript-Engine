const fetchData =()=>{
  return new Promise((resolve,reject)=>{
    const status = true;
    if(status){
      resolve({name:"hero"});
    }
    else{
      reject("server error");
    }
  })
}
fetchData()
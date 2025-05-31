let fetchData = () => {
  return new Promise((resolve, reject) => {
    let promiseStatus = true;
    if(promiseStatus){
        resolve({name:"Hero"})
    }
    else{
        console.log("Server Error");
    }
  });
};
console.log(fetchData())

fetchData()
.then(res=>console.log(res))
.catch(err.console.log(err))

const fetchData = () => {
  return new Promise((resolve, reject) => {
    let status = true;
    if(status){
        let mockData={json:()=>Promise.resolve({name:"hero"})
    }
    resolve(mockData);
  }
  else{
    reject("Server Error");
  }
})
}
fetchData(){
    .then(res =>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
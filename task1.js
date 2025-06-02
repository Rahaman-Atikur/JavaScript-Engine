const loadData = async () => {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const responseJsObject = await apiResponse.json();
  console.log(responseJsObject);
};
loadData();

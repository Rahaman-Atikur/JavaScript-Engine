const loadData = async () => {
  try {
    console.log("First");
    console.log("Second");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.json();
    console.log(data);
    let result = 10 + 10;
    console.log(result);
    console.log("Third");
  } catch {
    console.log("Error");
  }
};

loadData();

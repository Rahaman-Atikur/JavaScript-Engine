const fetchData = () => {
  return new Promise((resolve, reject) => {
    let status = true;
    if (status) {
      const mockData = {
        json: () => Promise.resolve({ name: "hero" }),
      };
      resolve(mockData);
    } else {
      reject("server error");
    }
  });
};
fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

axios
  .get("http://dummy.restapiexample.com/api/v1/employeesx")
  .then((res) => {
    let employees = res.data.data;
    console.log(employees);
  })
  .catch((err) => {
    //
    let message = err.response.data.message;
    let status = err.response.status;
  });

// axios
// .get('url')
// .then((res)=>{})
// .catch((err)=>{})

console.log("index loaded");

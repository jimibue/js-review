let employees = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 61,
    profile_image: "",
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    employee_salary: 170750,
    employee_age: 63,
    profile_image: "",
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    employee_salary: 86000,
    employee_age: 66,
    profile_image: "",
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    employee_salary: 433060,
    employee_age: 22,
    profile_image: "",
  },
]; // axios
// .get('url')
// .then((res)=>{})
// .catch((err)=>{})

// empoyeeObj = {
// employee_age: 61,
// employee_name: "Tiger Nixon",
// employee_salary: 320800,
// id: 1,
// profile_image: ""
// }

//CHALLENGES

// Get Automatically when page and have a loader UI
// ON CLICK to get employees
// Render Employees
// Error message for bad URL to axios call
// Delete Employee (FRONT END ONLY)
// SORT by name salary and or age
// Filter by age/salary
// Find total salary
// Styling

let state = {
  employees: [],
  errorOccured: false,
  errorMessage: "",
  errorStatus: "",
  loading: true,
};

axios
  .get("http://dummy.restapiexample.com/api/v1/employeesX")
  .then((res) => {
    console.log(res.data.data);
    state.errorOccured = false;
    state.loading = false;
    state.employees = res.data.data;
    render();
  })
  .catch((err) => {
    state.errorOccured = true;
    state.loading = false;
    state.errorMessage = err.response.data.message;
    state.errorStatus = err.response.status;
    render();
  });

const getEmployees = () => {
  state.loading = true;
  render();
  axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => {
      console.log(res.data.data);
      state.errorOccured = false;
      state.loading = false;
      state.employees = res.data.data;
      render();
    })
    .catch((err) => {
      // state.errorOccured = true;
      // state.errorMessage = err.response.data.message;
      // state.errorStatus = err.response.status;
      state.loading = false;
      state.employees = employees;
      render();
    });
};

// takes an employee object return string
const renderEmployee = (employee) => {
  return `<div>${employee.employee_name}</div>`;
};

// takes nothing  return string
const renderEmployees = () => {
  const { employees, errorOccured, errorMessage, errorStatus, loading } = state;
  if (errorOccured) {
    return `<div>
            <h1>ERROR: ${errorMessage}, failed with status${errorStatus}</h1>
            <div onclick='getEmployees()'>retry</div>
            </div>`;
  }
  if (loading) {
    // no employess
    return "loading";
  }
  let employeeStringArray = employees.map((employee) => {
    return renderEmployee(employee);
  });

  return employeeStringArray.join("");

  // return employees.map( e => renderEmployee(e)).join('')
};

const render = () => {
  let htmlString = "<div>";
  htmlString += "<h1>Employess</h1>";
  // do more stuff here
  htmlString += renderEmployees();
  htmlString += "</div>";
  document.getElementById("app").innerHTML = htmlString;
};

render();
console.log("index loaded");

const employee = {
    name : "",
    streetAddress :""
}

function updateEmployeeWithKeyAndValue(employee, key, value){
return {
    ...employee,
    [key] : value,
};
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
};

console.log(destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "12 Broadway"
));

function deleteFromEmployeeByKey(employee, key){
    let copy = {...employee};
    delete copy[key];
    return copy;

}

let newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
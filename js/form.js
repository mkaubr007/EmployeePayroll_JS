window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
});


function salaryOutput() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}
function save(event) {
    alert("save")

    event.preventDefault();
    event.stopPropagation();

    try {
        let employeePayrollDate = createEmployeePayroll();
    } catch (e) {
        return;
    }

}

function createEmployeePayroll() {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = document.querySelector('#name').value;
    } catch (e) {
        let textError = document.querySelector('.text-error');
        textError.textContent = e;
    }
}
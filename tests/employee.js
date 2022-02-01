const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('john@john.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Smith'));
});

test("gets employee's ID", () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1234'));
});

test("gets employee's email", () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('john@john.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
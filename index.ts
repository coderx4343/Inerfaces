// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => void;
  address: string;
  ph_no: number;
}

var customer: IPerson = {
  firstName: 'Kannan',
  lastName: 'G',
  sayHi: (): void => {
    console.log('Hi kasi');
  },
  address: 'Sivaksi - 626 189',
  ph_no: 983893787,
};

console.log('Customer Object ');
console.log("''''''''''''''''''''''''''''");
console.log(customer);
console.table(customer);
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: 'Kasinath',
  lastName: 'S',
  sayHi: (): void => {
    console.log('Hello kanna!!!');
  },
  address: 'Thiruthangal - 626 123',
  ph_no: 8987677678,
};

console.log('Employee  Object ');
console.log("''''''''''''''''''''''''''''");
console.log(employee);
console.table(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(customer.sayHi());

// // interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'shaun',
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('I spend', amount);
//     return amount;
//   },
// };
// const greetPerson = (person: IsPerson) => {
//   console.log('Hello ', person.name);
// };
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('mario', 'work on the mario website', 250);
// docTwo = new Invoice('luigi', 'work on the mario website', 300);
// const inOne = new Invoice('mario', 'work on the mario website', 250);
// const inTwo = new Invoice('luigi', 'work on the mario website', 300);
// let invoices: Invoice[] = [];
// invoices.push(inOne);
// invoices.push(inTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// console.log(invoices);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.age);

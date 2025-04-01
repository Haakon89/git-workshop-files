<<<<<<< HEAD
/**
 * Function that greets a person
 * @param name Name of person
 */
export const greeting = (name: string) => {
  console.log(`Hello ${name}`);
};
=======
const people = [
  { firstname: 'Magnus', lastname: 'Magnusson' },
  { firstname: 'Stefan', lastname: 'Stefanson' },
]

export const greeting = (firstname: string, lastname: string) => {
  console.log(`Hei hei ${firstname} ${lastname}`);
}

export const greetTheGang = () => {
  people.forEach((person) => {
    greeting(person.firstname, person.lastname);
  });
}
>>>>>>> feature-branch-3

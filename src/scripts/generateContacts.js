import {createFakeContact} from '../utils/createFakeContact.js';
import {writeContacts} from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
    const contacts = [];
for (
    let i=0;
    i<number;
    i++)
{  contacts.push(createFakeContact());}


console.log(contacts);
try {
    await writeContacts(contacts); console.log('Контакти додано до db.json');
  } catch (er) {console.log( er.message);}
};

generateContacts(5);




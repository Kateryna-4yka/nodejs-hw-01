import {createFakeContact} from '../utils/createFakeContact.js';
import {writeContacts} from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const contacts = createFakeContact();
console.log(contacts);
try {
    await writeContacts([contacts]); console.log('1 контакт додано до db.json');
  } catch (er) {console.log( er.message);}
};

addOneContact();

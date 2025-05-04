import {getAllContacts} from './getAllContacts.js';

export const countContacts = async () => {
    try {
        const data = await getAllContacts();
        return data.length;
      } catch (er) {
        console.log(er.message);
        return [];
      }
};

console.log(await countContacts());

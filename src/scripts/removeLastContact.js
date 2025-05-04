import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
   try {
        const data = await readContacts();
if (data.length>0) {
        const lastItem = (data[data.length - 1]).id;

        const notLastCont = data.filter((el)=>{ return el.id !== lastItem});

        await fs.writeFile(PATH_DB, JSON.stringify(notLastCont, null, 2));
}else{console.log(`У масиві немає контактів`);}
    } catch (error) {(console.log(error.message));}

};

removeLastContact();

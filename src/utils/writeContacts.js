import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = await readContacts();
        data.push(...updatedContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
    } catch (error) {(console.log(error.message));}
};

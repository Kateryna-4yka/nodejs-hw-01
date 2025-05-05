import path from 'node:path';
import { fileURLToPath } from 'node:url';

const meta = fileURLToPath(import.meta.url);
const dir = path.dirname(meta);

export const PATH_DB = path.resolve(dir, '../db/db.json');

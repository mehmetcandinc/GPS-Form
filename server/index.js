import express from 'express';
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.post('/groupAdd', async (req, res) => {
  await db.read();
  db.data.groups = db.data.groups || []; // for node < v15.x
  db.data.groups.push(req.body);
  await db.write();
  res.json({ message: 'Grup Eklendi!' });
});
app.post('/propertiesAdd', async (req, res) => {
  await db.read();
  db.data.properties = db.data.properties || []; // for node < v15.x
  db.data.properties.push(req.body);
  await db.write();
  res.json({ message: 'Özellik Eklendi!' });
});
app.post('/getGroup', async (req, res) => {
  await db.read();
  res.json({ data: db.data.groups });
});
app.post('/deviceAdd', (req, res) => {
  console.log('🚀 ~ file: index.js ~ line 8 ~ app.get ~ req', req.body);
  res.json({ message: 'Cihaz eklendi!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

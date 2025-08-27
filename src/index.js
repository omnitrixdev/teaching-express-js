const express = require('express');
const { hashPassword } = require('./utils/encryption');

const app = express();
const PORT = 3000;

app.use(express.json());

// Get, Post, Put, Delete, Patch, Options, Head, All

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log('Masukan ke database');

  await new Promise((r) => setTimeout(r, 2000));
  const hashedPassword = await hashPassword(password);

  console.log(`Sukses masuk ke database ${email} dan ${hashedPassword}`);

  res.json({ message: 'Registered!', data: { email } });
});

app.post('/login', (req, res) => {
  res.json({ message: 'Login Successful!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});

// DRY (don't repeat yourself)

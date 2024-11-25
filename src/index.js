const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

app.get('/users', (req, res) => {
  try {
    const response = users.map(user => ({ id: user.id, name: user.name, email: user.email }));
    if (response.length === 0) {
      throw new Error('No users found');
    }
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

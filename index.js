const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'سلام از سرور Express!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

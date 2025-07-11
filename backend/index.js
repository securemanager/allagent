const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

// سرو کردن فایل‌های استاتیک ساخته شده React
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'سلام از سرور Express!' });
});

// همه درخواست‌های دیگر را به React برگردان
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const sequelize = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log(`✅ Database connected successfully in [${process.env.NODE_ENV || 'dev'}] mode.`);
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ Unable to connect to the database:', err));
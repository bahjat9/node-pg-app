const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');

router.post('/', async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json(item);
  } catch (err) { 
    res.status(400).json({ error: err.message }); 
  }
});

router.get('/', async (req, res) => {
  const items = await itemService.getAllItems();
  res.json(items);
});

router.put('/:id', async (req, res) => {
  const item = await itemService.updateItem(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

router.delete('/:id', async (req, res) => {
  const success = await itemService.deleteItem(req.params.id);
  success ? res.status(204).send() : res.status(404).json({ error: 'Item not found' });
});

module.exports = router;
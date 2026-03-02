const Item = require('../models/Item');

const createItem = async (data) => await Item.create(data);
const getAllItems = async () => await Item.findAll();
const getItemById = async (id) => await Item.findByPk(id);

const updateItem = async (id, data) => {
  const item = await Item.findByPk(id);
  if (!item) return null;
  return await item.update(data);
};

const deleteItem = async (id) => {
  const item = await Item.findByPk(id);
  if (!item) return null;
  await item.destroy();
  return true;
};

module.exports = {
  createItem, getAllItems, getItemById, updateItem, deleteItem
};
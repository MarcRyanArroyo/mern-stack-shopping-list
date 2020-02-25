const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route Get api/items
//@desc Get Alll items
//@access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route POST api/items
//@desc Create A Item
//@access Public supposed to be private if there is authentication
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc DELETE a Item
//@access Public supposed to be private if there is authentication
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.patch('/:id', async (req, res) => {
  try {
    const updateItem = await Item.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false });
  }
});

module.exports = router;

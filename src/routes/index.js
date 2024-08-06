const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const logMiddleware = require("../middleware/logMiddleware");

// GET isteği ile öğelerin listesini getirme
router.get("/ogeler", logMiddleware, itemController.getItems);

// POST isteği ile yeni bir öğe oluşturma
router.post("/ogeler", logMiddleware, itemController.createItem);

// PUT isteği ile bir öğeyi güncelleme
router.put("/ogeler/:id", logMiddleware, itemController.updateItem);

// DELETE isteği ile bir öğeyi silme
router.delete("/ogeler/:id", logMiddleware, itemController.deleteItem);

module.exports = router;

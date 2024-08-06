// src/controllers/itemController.js

// GET isteği ile öğelerin listesini getirme
const getItems = (req, res) => {
    res.json({ mesaj: "Öğelerin listesini getiriliyor" });
  };
  
  // POST isteği ile yeni bir öğe oluşturma
  const createItem = (req, res) => {
    const yeniOge = req.body;
    res.json({ mesaj: "Yeni bir öğe oluşturuluyor", oge: yeniOge });
  };
  
  // PUT isteği ile bir öğeyi güncelleme
  const updateItem = (req, res) => {
    const ogeId = req.params.id;
    const guncellenmisOge = req.body;
    res.json({
      mesaj: `ID'si ${ogeId} olan öğe güncelleniyor`,
      oge: guncellenmisOge,
    });
  };
  
  // DELETE isteği ile bir öğeyi silme
  const deleteItem = (req, res) => {
    const ogeId = req.params.id;
    res.json({ mesaj: `ID'si ${ogeId} olan öğe siliniyor` });
  };
  
  module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
  
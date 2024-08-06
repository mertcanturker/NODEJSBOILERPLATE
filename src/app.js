const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");

// .env dosyasındaki çevresel değişkenleri yükleme
dotenv.config();

const app = express();

// Middleware'ler
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Temel route'lar
app.use("/api", routes);

// Public dizinini servis etme
app.use(express.static("public"));

// 404 hatası için middleware
app.use((req, res, next) => {
  res.status(404).json({ mesaj: "Bulunamadı" });
});

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mesaj: "Sunucu Hatası" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

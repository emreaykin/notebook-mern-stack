const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const notSema = Sema(
  {
    baslik: {
      type: String,
      required: [true,'Baslik Zorunlu Olarak Girilmelidir.'], //Başlığın zorunlu girilmesi için
    },
    aciklama: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);

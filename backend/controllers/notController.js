const NotModel = require("../models/notModel");
const mongoose = require("mongoose");
const notOlustur = async (req, res) => {
  const { baslik, aciklama } = req.body;

  try {
    const not = await NotModel.create({ baslik, aciklama });
    res.status(200).json(not);
  } catch (err) {
    res.status(400).json({ hata: err.message });
  }
};

const notlarGetir = async (req, res) => {
  const notlar = await NotModel.find().sort({
    createdAt: -1,
  });

  res.status(200).json(notlar);
};

const notGetir = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID geçersiz." });
  }
  const not = await NotModel.findById(id);

  if (!not) {
    return res.status(404).json({ hata: "Not bulunamadı" });
  }

  res.status(200).json(not);
};

const notSil = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID geçersiz." });
  }
  const not = await NotModel.findOneAndDelete({ _id: id });

  if (!not) {
    return res.status(404).json({ hata: "Not bulunamadı" });
  }

  res.status(200).json(not);
};

const notGuncelle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID geçersiz." });
  }
  const not = await NotModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },{new:true}
  );

  if (!not) {
    return res.status(404).json({ hata: "Not bulunamadı" });
  }

  res.status(200).json(not);
};
module.exports = {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle
};

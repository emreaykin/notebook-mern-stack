const expres = require("express");
const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require("../controllers/notController");
const router = expres.Router();

router.get("/", notlarGetir);

//listele
router.get('/:id',notGetir)
//ekle
router.post('/', notOlustur)
//sil
router.delete('/:id',notSil)
//güncelle
router.patch('/:id',notGuncelle)
router.put('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu güncelle`})
})
module.exports = router;

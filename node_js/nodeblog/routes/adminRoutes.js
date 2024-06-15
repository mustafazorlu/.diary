const express = require("express");
const {
    admin_index,
    admin_render,
    admin_add,
    admin_delete,
} = require("../controllers/adminController.js");

const router = express.Router();

//admin sayfasında görüntülenecek tüm yazıları
//listelemek için
router.get("/admin", admin_index);

//yeni blog yazısını eklediğimiz sayfanın renderı için
router.get("/admin/add", admin_render);

//formdan yaptığımız istek ve veri tabanına kaydetme işlemi
router.post("/admin/add", admin_add);

//blogu veri tabanından silme işlemi
router.delete("/admin/delete/:id", admin_delete);

module.exports = router;

const router = require("express").Router();
const controller = require("../controllers/division");
const { saveFile } = require("../utils/gallery");
//const multer = require("multer");
//const upload = multer();

router.get("/", controller.all);
router.post("/", [saveFile, controller.post]);

router
  .route("/:id")
  .get(controller.get)
  .patch([saveFile, controller.patch])
  .delete(controller.drop);

module.exports = router;

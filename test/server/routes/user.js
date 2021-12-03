const router = require("express").Router();
const controller = require("../controllers/user");

router.get("/info", controller.infoControl);
router.get("/nickcheck", controller.nickcheckControl);
router.patch("/edit", controller.editControl);
router.patch("/password", controller.passwordControl);
router.delete("/withdrawal", controller.withdrawalControl);

module.exports = router;

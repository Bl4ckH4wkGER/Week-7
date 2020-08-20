const { Router } = require('express');
const router = Router();

router.use("/weather", require("./weather"));

router.get("/", (req, res, next) => {
    res.render('index');
});

module.exports = router;
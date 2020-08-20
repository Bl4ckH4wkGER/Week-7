const { Router } = require('express');
const router = Router();
const weatherDAO = require("../daos/weather");

router.get("/", (req, res, next) => {
    res.render("weather");
});

router.get("/location", async (req, res, next) => {
    let { name } = req.query;
    if (!name) {
        res.redirect("/weather");
    } else {
        const location = await weatherDAO.getLocationData(name);
        if (location) {
            res.render( "found", {
                name: location.name,
                temperature: location.temperature
            })
        } else {
            res.status(404);
            res.render( "notFound", { name: name });
        }
    }
});

module.exports = router;
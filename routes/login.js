const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("loginpage");
});

router.post('/', (req, res) => {
    res.redirect('/success');
    console.log("Login attempt with username and password:", req.body.username, req.body.password);
})

module.exports = router;
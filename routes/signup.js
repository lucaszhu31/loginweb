const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("signuppage");
});

router.post('/', (req, res) => {
    res.redirect('/success');
    console.log("Sign up attempt with username and password:", req.body.username, req.body.password);
});

module.exports = router;
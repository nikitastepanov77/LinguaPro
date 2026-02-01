const express = require('express');
const router = express.Router();

const publicRoutes = require('./public');
const adminRoutes = require('./admin');

router.use('/', publicRoutes);
router.use('/', adminRoutes);

module.exports = router;
const express = require('express');
const router = express.Router();
const { createPlan, getPlans, updatePlan } = require('../controllers/index');

// Route to create a new plan
router.post('/plans', createPlan);

// Route to get all plans
router.get('/plans', getPlans);

// Route to update a specific plan
router.put('/plans/:id', updatePlan);

module.exports = router;
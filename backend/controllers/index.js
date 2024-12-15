const Plan = require('../models/index');

// Create a new plan
const createPlan = async (req, res) => {
    try {
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all plans
const getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a plan
const updatePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPlan = await Plan.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPlan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPlan,
    getPlans,
    updatePlan,
};
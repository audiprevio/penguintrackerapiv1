const { PerformanceData } = require('../models/allModel');

const postPerformanceData = async (req, res) => {
    try {
        const newperformanceData = new PerformanceData(req.body);
        await newperformanceData.save();
        res.status(201).json(newperformanceData);
    } catch (error) {
        res.status(500).json({ error: "Failed to create performance data" });
    }
};
      
const getPerformanceData = async (req, res) => {
    try {
        const performanceData = await PerformanceData.findOne();
        if (!performanceData) {
            res.status(404).json({ error: "Performance data not found" });
            return;
        }

        res.status(200).json({
            totalPenguinTracked: performanceData.totalPenguinTracked,
            lastUpdated: performanceData.lastUpdated,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to get performance data" });
    }
};
  
const putPerformanceData = async (req, res) => {
  try {
    const newPerformanceData = new PerformanceData(req.body);
    await newPerformanceData.save();
    res.status(201).json(newPerformanceData);
  } catch (error) {
    res.status(500).json({ error: "Failed to create performance data" });
  }
};
  
  const patchPerformanceData = async (req, res) => {
    try {
      const { totalPenguinTracked, lastUpdated } = req.body;
      const performanceData = await performanceData.findOneAndUpdate(
        {},
        { totalPenguinTracked, lastUpdated },
        { new: true }
      );
      res.status(200).json(performanceData);
    } catch (error) {
      res.status(500).json({ error: "Failed to update performance data" });
    }
  };

  
module.exports = { getPerformanceData , putPerformanceData , patchPerformanceData , postPerformanceData };
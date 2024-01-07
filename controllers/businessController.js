const { getAzureConfigurationSetting, setAzureConfigurationSetting } = require('../utils/azureConfig');

const updateSettings = async (req, res) => {
  try {
    const updates = req.body;
    await setAzureConfigurationSetting('businessSettings', updates);
    res.send('Settings updated successfully');
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).send('Failed to update settings');
  }
};

const getSettings = async (req, res) => {
  try {
    const settings = await getAzureConfigurationSetting('businessSettings');
    res.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('Error fetching settings');
  }
};

module.exports = {
  updateSettings,
  getSettings
};

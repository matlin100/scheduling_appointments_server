const { getAzureConfigurationSetting } = require('../utils/azureConfig');
const { checkAvailabilityInCalendar } = require('../utils/calendarUtils'); // Ensure this function is implemented

const checkAvailability = async (req, res) => {
  try {
    // Fetch settings from Azure App Configuration
    const settings = await getAzureConfigurationSetting('businessSettings');
    
    // Calculate available slots based on settings and Google Calendar data
    const availability = checkAvailabilityInCalendar(settings);
    
    res.json(availability);
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).send('Error checking availability');
  }
};

module.exports = {
  checkAvailability
};

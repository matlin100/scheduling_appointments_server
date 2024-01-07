const { AppConfigurationClient } = require("@azure/app-configuration");
require('dotenv').config();


const connectionString = process.env.AZURE_APP_CONFIG_CONNECTION_STRING;
const client = new AppConfigurationClient(connectionString);

async function getAzureConfigurationSetting(key) {
  try {
    const setting = await client.getConfigurationSetting({ key });
    return JSON.parse(setting.value);
  } catch (error) {
    console.error(`Error fetching configuration for key ${key}:`, error);
    throw error;
  }
}

async function setAzureConfigurationSetting(key, value) {
    try {
      await client.setConfigurationSetting({
        key: key,
        value: JSON.stringify(value),
        contentType: 'application/json'
      });
    } catch (error) {
      console.error(`Error setting configuration for key ${key}:`, error);
      throw error;
    }
  }
  
  module.exports = {
    getAzureConfigurationSetting,
    setAzureConfigurationSetting 
    };
  


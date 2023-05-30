import axios from 'axios';

const apiBaseURL = process.env.apiBaseURL || 'http://localhost:3001';

async function getLocationDetails({ ip }) {
  const { data: locationDetails } = await axios.get(`${apiBaseURL}/geoip/${ip}/location`);

  return locationDetails;
}

export { getLocationDetails };

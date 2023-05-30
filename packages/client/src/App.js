import { useState } from 'react';
import Topbar from './Topbar';
import './index.css';
import SearchBar from './SearchBar';
import LocationDetails from './LocationDetails';
import { getLocationDetails } from './api';
import Footer from './Footer';

function App() {
  const [locationDetails, setLocationDetails] = useState({});
  const [ip, setIp] = useState('');

  const handleSubmit = async (ip) => {
    setIp(ip);
    const location = await getLocationDetails({ ip });
    setLocationDetails(location);
  };

  return (
    <div className="container">
      <Topbar/>
      <hr className="solid"></hr>
      <div className='section'>
        This free online tool allows you to see the geographical location of any IP address. Just input the IP address and you will be shown the position on a map, coordinates, country, region, city and organization.
      </div>
      <SearchBar onSubmit={handleSubmit}/>
      <LocationDetails location={locationDetails} ip={ip}/>
      <Footer />
    </div>
  );
}

export default App;

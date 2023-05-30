import './index.css';

function LocationDetails({ location, ip }) {
  return (
    <div className='location-table'>
      <table title='Location'>
        <tbody>
          <tr>
            <th>
              IP Address
            </th>
            <td>
              {ip}
            </td>
          </tr>

          <tr>
            <th>
              Latitude
            </th>
            <td>
              {location.cityDetails?.location.latitude}
            </td>
          </tr>

          <tr>
            <th>
              Longitude
            </th>
            <td>
            {location.cityDetails?.location.longitude}
            </td>
          </tr>

          <tr>
            <th>
              Country
            </th>
            <td>
            {location.cityDetails?.country.names.en}
            </td>
          </tr>

          <tr>
            <th>
              Region
            </th>
            <td>
            {location.cityDetails?.subdivisions ? location.cityDetails.subdivisions[0].names.en : '' }
            </td>
          </tr>

          <tr>
            <th>
              City
            </th>
            <td>
            {location.cityDetails?.city ? location.cityDetails?.city.names.en : ''}
            </td>
          </tr>

          <tr>
            <th>
              Organization
            </th>
            <td>
            {location.asnDetails?.autonomous_system_organization}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// autonomous_system_organization
export default LocationDetails;

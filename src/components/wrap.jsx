import CardContainer from './cardContainer';
import { useState, useEffect } from 'react'

const Wrap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:3000/api/cars'); // Change the URL to your API endpoint
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching cars:', error);
        }
      }
  
      fetchData();
    }, []);
    
    
  return (
    <CardContainer cars={data}/>
  )
}

export default Wrap
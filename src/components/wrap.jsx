import CardContainer from './cardContainer';
import NavBar from './navBar';
import PageContentHeader from './pageContentHeader';
import Separator from './separator';

import { useState, useEffect } from 'react'

const Wrap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:3000/api/cars');
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching cars:', error);
        }
      }
  
      fetchData();
    }, []);
    
    
  return (
    <>
      <NavBar />
      <PageContentHeader />
      <Separator text="LATEST ARRIVALS FOR SALE"/>
      <CardContainer cars={data}/>
      <Separator text="LATEST COMPANY NEWS"/>
      </>
  )
}

export default Wrap
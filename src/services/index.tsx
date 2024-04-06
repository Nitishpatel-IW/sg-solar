import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { environment } from '../environments/environment ';
import { wrap } from 'module';

const API = environment.API_URL;

interface Todo {
  id: number;
  title: string;
  image: string;
}


const Demo = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setProducts(fetchedData);
    } catch (err: any) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Handling API
      </h2>

      {isLoading && <p style={{ textAlign: 'center' }}>Loading data...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}

      {products.length > 0 && (
        <section style={{ display: 'flex', justifyContent: 'center',  margin: '1rem', flexWrap: 'wrap', }}>

          {products.map((p: Todo) => (
            <span key={p.id} style={{ display: 'flex', flexDirection: 'column', width: '300px', height: 'auto', padding: '1rem', border: '2px solid lightpink', margin: '1rem', cursor: 'pointer', }}>

              <img style={{ height: '250px', width: '100%' }} src={p.image} alt="" />
              <h3 style={{ fontSize: '14px', textAlign: 'center', margin: '0.5rem 0' }}>
                {p.title}
              </h3>

            </span>
          ))}

        </section>
      )}
    </>
  );
};

export default Demo;


import { useState, useEffect } from 'react';

function Practice() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        setData(await response.json());
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  
  return (
    <div>
      {data.quotes?.map((item, index) => (
        <div key={index}>
          <p><strong>{item.quote}</strong></p>
          <p>— {item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Practice;
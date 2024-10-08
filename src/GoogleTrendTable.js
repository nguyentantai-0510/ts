import React, { useState, useEffect } from 'react';

const GoogleTrendTable = ({ keyword }) => {
  const [trendData, setTrendData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      fetchTrendData(keyword);
    }
  }, [keyword]);

  const fetchTrendData = async (keyword) => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/trend/fetch_daily_trend_total', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keywords: [keyword],
          timeframe: 'now 1-H', // Khoảng thời gian tùy chỉnh
          geo: 'VN', // Khu vực tìm kiếm (Ví dụ: Việt Nam)
        }),
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const data = await response.json();
      setTrendData(data);
    } catch (error) {
      setError('Failed to fetch trend data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Google Trend for "{keyword}"</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {trendData && (
        <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Total Searches</th>
            </tr>
          </thead>
          <tbody>
            {trendData.keywords.map((kw, index) => (
              <tr key={index}>
                <td>{kw}</td>
                <td>{trendData.total_searches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GoogleTrendTable;

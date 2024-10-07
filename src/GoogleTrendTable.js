import React, { useState } from 'react';

const GoogleTrendTable = () => {
  const [keywords, setKeywords] = useState('');
  const [timeframe, setTimeframe] = useState('now 1-H');
  const [geo, setGeo] = useState('VN');
  const [searchResult, setSearchResult] = useState(null);

  // Dữ liệu mẫu (mock data)
  const mockData = {
    keywords: ["bóng", "đá", "VN"],
    total_searches: 3377
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult(mockData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Google Trends Dashboard (Dữ liệu mẫu)</h1>

      {/* Form nhập từ khóa */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Từ khóa: </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Nhập từ khóa (ngăn cách bằng dấu phẩy)"
            style={{ padding: '5px', width: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Khung thời gian: </label>
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} style={{ padding: '5px' }}>
            <option value="now 1-H">Giờ gần nhất</option>
            <option value="now 1-d">Ngày gần nhất</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Khu vực: </label>
          <input
            type="text"
            value={geo}
            onChange={(e) => setGeo(e.target.value)}
            placeholder="Mã khu vực (ví dụ: VN)"
            style={{ padding: '5px', width: '100px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          Lấy dữ liệu
        </button>
      </form>

      {/* Hiển thị kết quả trong bảng */}
      {searchResult && (
        <div style={{ marginTop: '20px' }}>
          <h2>Kết quả tìm kiếm</h2>
          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Từ khóa</th>
                <th>Tổng số lượt tìm kiếm</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.keywords.map((keyword, index) => (
                <tr key={index}>
                  <td>{keyword}</td>
                  <td>{searchResult.total_searches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GoogleTrendTable;

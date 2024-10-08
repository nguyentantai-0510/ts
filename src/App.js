import React, { useState } from 'react';
import GoogleTrendTable from './GoogleTrendTable';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState(''); // Quản lý từ khóa người dùng nhập vào

  // Hàm xử lý khi từ khóa thay đổi
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Trends Search</h1>
        {/* Input cho người dùng nhập từ khóa */}
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Enter a keyword"
        />
        {/* Chỉ hiển thị kết quả khi người dùng đã nhập từ khóa */}
        {keyword && <GoogleTrendTable keyword={keyword} />}
      </header>
    </div>
  );
}

export default App;

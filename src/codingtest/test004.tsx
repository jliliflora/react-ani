// 검색 필터 구현 + 버튼 있는 버전 + 버튼 없는 버전
import { useState } from "react";

function Soultion004_noBtn() {
  const [inputData, setInputData] = useState("");
  const data = ["apple", "banana", "grape", "orange"];

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(inputData.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="검색어 입력"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />

      <ul>
        {inputData
          ? filtered.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </>
  );
}

function Soultion004_Btn() {
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState<string[]>([]);
  const data = ["apple", "banana", "grape", "orange"];

  const SearchBtn = () => {
    const filterData = data.filter((item) =>
      item.toLowerCase().includes(inputData.toLowerCase())
    );
    setSearchData(filterData);
  };

  return (
    <>
      <input
        placeholder="검색어 입력"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={SearchBtn}>검색</button>

      {searchData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}

function Soultion004() {
  return (
    <>
      <Soultion004_noBtn />
      <Soultion004_Btn />
    </>
  );
}

export default Soultion004;

// export default Soultion004_ver2;

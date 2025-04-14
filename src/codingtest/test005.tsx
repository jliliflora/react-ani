// 조회수, 업로드 순 버튼 구현 + 좋아요 기능 추가 + 선택시 하이라이트?처럼 표기되게하기

import { useState } from "react";

const data = [
  { title: "React Basics", views: 150, upload: "2023-01-01" },
  { title: "State vs Props", views: 220, upload: "2023-01-10" },
  { title: "Hooks Overview", views: 180, upload: "2023-02-01" },
  { title: "useEffect Explained", views: 90, upload: "2023-02-15" },
  { title: "useState Deep Dive", views: 130, upload: "2023-03-01" },
  { title: "React Router", views: 170, upload: "2023-03-20" },
  { title: "Component Lifecycle", views: 75, upload: "2023-04-01" },
  { title: "Handling Forms", views: 210, upload: "2023-04-10" },
  { title: "Redux Essentials", views: 300, upload: "2023-04-15" },
  { title: "Testing in React", views: 110, upload: "2023-05-01" },
];

const dataWithId = data.map((item, index) => ({
  ...item,
  id: `card-${index}`,
}));

function Soultion005_noid() {
  const [sortType, setSortType] = useState("views"); // 초기 정렬 기준: 조회수

  const sortedData = [...data].sort((a, b) => {
    if (sortType === "views") return b.views - a.views;
    if (sortType === "upload")
      return new Date(b.upload).getTime() - new Date(a.upload).getTime();
    return 0;
  });

  return (
    <div>
      <h2>Video List</h2> <br />
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="views">조회수순</option>
        <option value="upload">업로드 최신순</option>
      </select>
      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>
            <br />
            Views: {item.views}
            <br />
            Uploaded: {item.upload}
          </li>
        ))}
      </ul>
      <br />
      <br />
    </div>
  );
}

function Soultion005_id() {
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <>
      <ul>
        {dataWithId.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            style={{
              cursor: "pointer",
              backgroundColor:
                item.id === selectedId ? "#d0ebff" : "transparent",
              fontWeight: item.id === selectedId ? "bold" : "normal",
              padding: "6px",
              border: "1px solid #ccc",
              marginBottom: "4px",
            }}
          >
            <span>{item.id}</span>
            <br />
            <strong>{item.title}</strong>
            <br />
            Views: {item.views}
            <br />
            Uploaded: {item.upload}
            <br />
            <button onClick={() => toggleLike(item.id)}>
              {likes[item.id] ? "❤️ 좋아요 취소" : "🤍 좋아요"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
//Type '(id: string) => void' is not assignable to type 'MouseEventHandler<HTMLLIElement>'.
//Types of parameters 'id' and 'event' are incompatible.
// Type 'MouseEvent<HTMLLIElement, MouseEvent>' is not assignable to type 'string'.ts(2322)

function Soultion005() {
  return (
    <>
      <Soultion005_noid />
      <Soultion005_id />
    </>
  );
}

export default Soultion005;

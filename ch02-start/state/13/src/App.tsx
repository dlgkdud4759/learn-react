import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 300, y: 200 });

  const handelMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // 요소의 크기와 뷰포트 기준 위치를 반환하는 DOM 메서드로 DOMRect 객체를 반환
    // DOMRect: left(x), top(y), right, bottom, width, height 속성을 가짐
    const containerRect = e.currentTarget.getBoundingClientRect();
    console.log(e.clientX - containerRect.x, e.clientY - containerRect.y);

    // position.x = e.clientX - containerRect.x;
    // position.y = e.clientY - containerRect.y;

    const newPosition = {
      x: e.clientX - containerRect.x,
      y: e.clientY - containerRect.y,
    };

    setPosition(newPosition);
  };
  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={handelMove}>
        <div
          className="circle"
          style={{
            pointerEvents: "none",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;

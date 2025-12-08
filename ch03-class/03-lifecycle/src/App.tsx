import { useState } from "react";
import ClickMe from "./ClickMe";

function App() {
  const [show, setShow] = useState<boolean>(true);

  // 버튼 클릭 시 ClickMe 컴포넌트를 제거
  // function Delete() {
  //   setShow(false);
  // }

  return (
    <div>
      <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
      <button onClick={() => setShow(false)}>ClickMe 제거</button>
      {show ? <ClickMe level={2} /> : ""}
    </div>
  );
}

export default App;

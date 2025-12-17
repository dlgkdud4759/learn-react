import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* 자식 컴포넌트로 대체 될 영역 */}
    </>
  );
}

export default Layout;

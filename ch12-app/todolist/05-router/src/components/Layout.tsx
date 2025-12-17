import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* 자식 컴포넌트가 렌더링 되는 영역 */}
      <Footer />
    </>
  );
}

export default Layout;

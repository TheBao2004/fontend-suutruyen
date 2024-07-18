import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeadFoot from "./components/HeadFoot/HeadFoot";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Detail from "./pages/Detail/Detail";
import Chapter from "./pages/Chapter/Chapter";
import Login from "./pages/Login/Login";
import P404 from "./pages/Errors/P404"; 
import Profile from "./pages/Profile/Profile";

function App({}) {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HeadFoot>
              <Home/>
            </HeadFoot>
          }
        />
        <Route
          path="/danh-muc/:slug?"
          element={
            <HeadFoot>
              <Category/>
            </HeadFoot>
          }
        />
        <Route
          path="/truyen/:slug?"
          element={
            <HeadFoot>
              <Detail />
            </HeadFoot>
          }
        />
        <Route
          path="/chuong/:slug?"
          element={
            <HeadFoot>
              <Chapter />
            </HeadFoot>
          }
        />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/404" element={<P404 />} />
        <Route
          path="/trang-ca-nhan"
          element={
            <HeadFoot>
              <Profile />
            </HeadFoot>
          }
        />
        {/* url not found */}
        <Route path="*" element={<P404 />} /> {/* Thêm route này */}
      </Routes>
    </Router>
  );
}

export default App;
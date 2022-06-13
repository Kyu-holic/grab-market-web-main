import "./App.css";
import MainPageComponent from "./main/index";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./Upload";
import ProductPage from "./Product";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          {/* 절대경로로 이미지 파일 경로 지정 */}
          <img src="/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;

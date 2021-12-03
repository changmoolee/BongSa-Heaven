import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import "./App.css";
import "./css/Reset.css";

import Footer from "./components/common/Footer";
import DevHeader from "./components/DevHeader";
import DevFooter from "./components/DevFooter";
import MainPage from "./Pages/Main/MainPage";

import RecruiterSignUp from "./Pages/Sign/RecruiterSignUp";
import SignUp from "./Pages/Sign/SignUp";
import SignIn from "./Pages/Sign/Sign";
import UserSignUp from "./Pages/Sign/UserSignUp";

import MaillWrite from "./Pages/MyPage/MaillWrite";
import MaillWriteCheck from "./Pages/MyPage/MaillWriteCheck";
import RecruiterDelete from "./Pages/MyPage/RecruiterDelete";
import RecruiterEdit from "./Pages/MyPage/RecruiterEdit";
import RecruiterMyPage from "./Pages/MyPage/RecruiterMyPage";
import RecruiterPasswordCheck from "./Pages/MyPage/RecruiterPasswordCheck";
import RecruiterMaill from "./Pages/MyPage/RecruiterMaill";
import SeeRecruiter from "./Pages/MyPage/SeeRecruiter";
import SeeUser from "./Pages/MyPage/SeeUser";
import UserDelete from "./Pages/MyPage/UserDelete";
import UserEdit from "./Pages/MyPage/UserEdit";
import UserEditPasswordCheck from "./Pages/MyPage/UserEditPasswordCheck";
import UserMaill from "./Pages/MyPage/UserMaill";
import UserMyPage from "./Pages/MyPage/UserMyPage";

import FreeBoardContents from "./Pages/FreeBoard/FreeBoardContents";
import FreeBoardCreate from "./Pages/FreeBoard/FreeBoardCreate";
import FreeBoardDelete from "./Pages/FreeBoard/FreeBoardDelete";
import FreeBoardEdit from "./Pages/FreeBoard/FreeBoardEdit";
import FreeBoardList from "./Pages/FreeBoard/FreeBoardList";

import CrewBoardContents from "./Pages/CrewBoard/CrewBoardContents";
import CrewBoardCreate from "./Pages/CrewBoard/CrewBoardCreate";
import CrewBoardDelete from "./Pages/CrewBoard/CrewBoardDelete";
import CrewBoardEdit from "./Pages/CrewBoard/CrewBoardEdit";
import CrewBoardList from "./Pages/CrewBoard/CrewBoardList";
import Header5 from "./components/common/Header5";

import Map from "./Pages/Map/Map";

export default function App(handlelogout) {
  const [isDevHeader, setIsDevHeader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   nickname: "",
  //   password: "",
  //   imgUrl: "",
  //   want_region: "",
  //   want_vol: "",
  //   gender: "",
  //   age: "",
  // });
  const history = useHistory();

  const handleDevHeader = () => {
    setIsDevHeader(!isDevHeader);
  };

  const handleLogin = (token) => {
    setAccessToken(token);

    if (token) {
      setIsLogin(true);
      history.push("/");
    }
  };
  // const handleLogout = () => {
  //   localStorage.clear();
  //   const deleteCookie = function (name) {
  //     document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
  //   };
  //   setIsLogIn(false);
  //   deleteCookie("refreshToken");
  // };
  return (
    <div id="app_div">
      <Header5 isLogin={isLogin} isUser={isUser} onClick={handlelogout} />
      {isDevHeader ? <DevHeader /> : null}
      <Route exact path="/" component={MainPage} />
      {/* Sign */}
      <Route exact path="/RecruiterSignUp" component={RecruiterSignUp} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route
        exact
        path="/SignIn"
        render={() => (
          <SignIn
            accessToken={accessToken}
            isLogin={isLogin}
            handleLogin={handleLogin}
            // handlelogout={handleLogout}
          />
        )}
      />
      <Route exact path="/UserSignUp" component={UserSignUp} />
      {/* MyPage */}
      <Route exact path="/MaillWrite" component={MaillWrite} />
      <Route exact path="/MaillWriteCheck" component={MaillWriteCheck} />
      <Route exact path="/RecruiterDelete" component={RecruiterDelete} />
      <Route exact path="/RecruiterEdit" component={RecruiterEdit} />
      <Route exact path="/RecruiterMyPage" component={RecruiterMyPage} />
      <Route
        exact
        path="/RecruiterPasswordCheck"
        component={RecruiterPasswordCheck}
      />
      <Route exact path="/RecruiterMaill" component={RecruiterMaill} />
      <Route exact path="/SeeRecruiter" component={SeeRecruiter} />
      <Route exact path="/SeeUser" component={SeeUser} />
      <Route exact path="/UserDelete" component={UserDelete} />
      <Route exact path="/UserEdit" component={UserEdit} />
      <Route
        exact
        path="/UserEditPasswordCheck"
        component={UserEditPasswordCheck}
      />
      <Route exact path="/UserMaill" component={UserMaill} />
      <Route exact path="/UserMyPage" component={UserMyPage} />
      {/* FreeBoard */}
      <Route exact path="/FreeBoardContents" component={FreeBoardContents} />
      <Route exact path="/FreeBoardCreate" component={FreeBoardCreate} />
      <Route exact path="/FreeBoardDelete" component={FreeBoardDelete} />
      <Route exact path="/FreeBoardEdit" component={FreeBoardEdit} />
      <Route exact path="/FreeBoardList" component={FreeBoardList} />
      {/* CrewBoard */}
      <Route exact path="/CrewBoardContents" component={CrewBoardContents} />
      <Route exact path="/CrewBoardCreate" component={CrewBoardCreate} />
      <Route exact path="/CrewBoardDelete" component={CrewBoardDelete} />
      <Route exact path="/CrewBoardEdit" component={CrewBoardEdit} />
      <Route exact path="/CrewBoardList" component={CrewBoardList} />
      <Route exact path="/Map" component={Map} />
      <DevFooter handleDevHeader={handleDevHeader} isDevHeader={isDevHeader} />

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import "./App.css";
import "./css/Reset.css";
import Footer from "./components/common/Footer";
import DevHeader from "./components/DevHeader";
import DevFooter from "./components/DevFooter";
import DevBtn from "./components/DevBtn";
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
import MapRegister from "./Pages/Map/MapRegister";

export default function App() {
  const [isDevHeader, setIsDevHeader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState("user");
  const [currentFBcontent, setFBcontent] = useState({});

  const handleDevHeader = () => {
    setIsDevHeader(!isDevHeader);
  };
  const history = useHistory();
  const GotoContents = () => history.push("/FreeBoardContents");

  const GoToFreeBoardContent = (freeboard_id) => {
    axios
      .post(
        "http://localhost:8080/board/fbinfo",
        {
          freeboard_id: freeboard_id,
        },
        {
          headers: {
            authorization: `Bearer ` + localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log("res.data",res.data)
        setFBcontent(res.data);
        // console.log("currentFBcontent",currentFBcontent)

        GotoContents();
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    if (localStorage.getItem("accessToken"))
      axios
        .get(`http://localhost:8080/user/info`, {
          headers: {
            authorization: `Bearer ` + localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
            withCredentials: true,
          },
        })
        .then((res) => {
          if (res.data.data.iscompany) {
            setIsUserLogin("recruiter");
            setIsLogin(true);
          } else {
            setIsUserLogin("user");
            setIsLogin(true);
          }
        })
        .catch((err) => {
          console.log("err");
          setIsLogin(false);
        });
  }, [isUserLogin]);


  document.cookie = "refreshToken=; domain=;  path=/;  expires=;";
  return (
    <div id="app_div">
      <Header5
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isUserLogin={isUserLogin}
        setIsUserLogin={setIsUserLogin}
      />

      {isDevHeader ? <DevHeader /> : null}
      <Route exact path="/" component={MainPage} />
      {/* Sign */}

      <Route exact path="/RecruiterSignUp" component={RecruiterSignUp} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route
        exact
        path="/SignIn"
        render={() => (
          <SignIn setIsLogin={setIsLogin} setIsUserLogin={setIsUserLogin} />
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
      <Route
        exact
        path="/UserEdit"
        render={() => (
          <UserEdit

          // handlelogout={handleLogout}
          />
        )}
      />
      <Route
        exact
        path="/UserEditPasswordCheck"
        component={UserEditPasswordCheck}
      />
      <Route exact path="/UserMaill" component={UserMaill} />
      <Route exact path="/UserMyPage" component={UserMyPage} />
      {/* FreeBoard */}
      <Route
        exact
        path="/FreeBoardContents"
        render={() => <FreeBoardContents currentFBcontent={currentFBcontent} />}

      

      />
      <Route exact path="/FreeBoardCreate" component={FreeBoardCreate} />
      <Route 
      exact 
      path="/FreeBoardDelete" 
      render={() => (
        <FreeBoardDelete
        currentFBcontent={currentFBcontent}
        />
      )}
      />
      <Route 
      exact
      path="/FreeBoardEdit" 
      render={() => (
        <FreeBoardEdit
        currentFBcontent={currentFBcontent}
        />
      )}
      />
      
      <Route 
      exact 
      path="/FreeBoardList" 
      render={() => (
        <FreeBoardList
        GoToFreeBoardContent={GoToFreeBoardContent}
        />
      )}

      />
      {/* CrewBoard */}
      <Route exact path="/CrewBoardContents" component={CrewBoardContents} />
      <Route exact path="/CrewBoardCreate" component={CrewBoardCreate} />
      <Route exact path="/CrewBoardDelete" component={CrewBoardDelete} />
      <Route exact path="/CrewBoardEdit" component={CrewBoardEdit} />
      <Route exact path="/CrewBoardList" component={CrewBoardList} />

      <Route exact path="/Map" component={Map} />
      <Route exact path="/MapRegister" component={MapRegister} />
      <DevFooter handleDevHeader={handleDevHeader} isDevHeader={isDevHeader} />

      <DevBtn />

      <Footer
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setIsUserLogin={setIsUserLogin}
      />
    </div>
  );
}

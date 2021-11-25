import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function App() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    nickname: "",
    password: "",
    sex: "",
    want_region: "",
    want_vol: "",
    age: "",
  });

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignUp = () => {
    const email = userinfo.email;
    const nickname = userinfo.nickname;
    const password = userinfo.password;
    const sex = userinfo.sex;
    const want_region = userinfo.want_region;
    const want_vol = userinfo.want_region;
    const age = userinfo.age;
    console.log("Im UserInfo", userinfo);
    axios
      .post(
        "http://localhost:8080/auth/signup",
        {
          email: email,
          nickname: nickname,
          password: password,
          sex: sex,
          want_region: want_region,
          want_vol: want_vol,
          age: age,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const handleSignIn = () => {
    console.log("handleSignIn");
    const email = userinfo.email;
    const password = userinfo.password;

    console.log("Im UserInfo", userinfo);
    axios
      .post(
        "http://localhost:8080/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        const token = res.data.data;
        console.log("res");
        console.log(token);
        handleResponseSuccess(token);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const handleResponseSuccess = (token) => {
    isAuthenticated(token);
  };

  const isAuthenticated = (token) => {
    axios
      .get(
        "http://localhost:8080/user/info",
        { token },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res");
      })
      .catch((err) => {
        console.log("err");
      });
  };
  // email, nickname, password, sex, want_region, want_vol, age(young/adult/old)

  return (
    <div className="test_box">
      <div className="test_box_box">
        <input
          type="email"
          placeholder="email"
          onChange={handleInputValue("email")}
        />
        <input
          type="text"
          placeholder="nickname"
          onChange={handleInputValue("nickname")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInputValue("password")}
        />
        <input
          type="text"
          placeholder="sex"
          onChange={handleInputValue("sex")}
        />
        <input
          type="text"
          placeholder="want_region"
          onChange={handleInputValue("want_region")}
        />
        <input
          type="text"
          placeholder="want_vol"
          onChange={handleInputValue("want_vol")}
        />
        <input
          type="text"
          placeholder="age"
          onChange={handleInputValue("age")}
        />
        <button onClick={handleSignUp}>Auth/SignUp[Post]</button>
      </div>
      <div className="test_box_box">
        <input
          type="email"
          placeholder="email"
          onChange={handleInputValue("email")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInputValue("password")}
        />
        <button onClick={handleSignIn}>Auth/SignIn[Post]</button>
      </div>
    </div>
  );
}
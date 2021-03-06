import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import Header3 from "../../components/common/Header3";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  @media screen and (min-width: 37.5rem) {
    background-color: white;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 37.5rem) {
    margin-top: 65px;
    width: 1080px;
  }
`;

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
`;
const EditEmaill = styled.div`
  @media screen and (min-width: 37.5rem) {
    font-size: 36px;
    margin-bottom: 5%;
  }
`;

const SignUpWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
`;
const SignUpWhiteInput = styled.input`
  width: 90%;
  border: none;
  @media screen and (min-width: 37.5rem) {
    border: solid 1px black;
    width: 40%;
    height: 40px;
  }

  ::placeholder {
  }
`;
const CheckingPossibleOrNotBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    width: 35%;
  }
`;
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
  @media screen and (min-width: 37.5rem) {
    margin: 0;
  }
`;

const CheckingPossibleOrNotButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const SelectSexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;
  @media screen and (min-width: 37.5rem) {
    width: 40%;
    justify-content: space-between;
    /* background-color: yellow; */
  }
`;
const SelectSexButton = styled.div`
  background-color: #ffb1b1;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 17vh;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 37.5rem) {
    width: 140px;
    height: 140px;
    justify-content: space-between;
    cursor: pointer;
  }
`;
const SelectedSexButton = styled.div`
  background-color: #ff7676;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 17vh;
  border-radius: 50%;
  @media screen and (min-width: 37.5rem) {
    width: 140px;
    height: 140px;
    justify-content: space-between;
    cursor: pointer;
  }
`;
const SexImageBox = styled.img`
  margin: 1vh 0vh 0.5vh 0vh;
  width: 70%;
  height: 70%;
  object-fit: cover;
  @media screen and (min-width: 37.5rem) {
    margin: 10;

    /* background-color: yellow; */
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px 0px 15px 0px;
  @media screen and (min-width: 37.5rem) {
    justify-content: center;
    width: 60%;
  }
`;
const AgeButton = styled.div`
  background-color: #ffb1b1;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 8vh;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 37.5rem) {
    margin: 0px 15px;
    width: 20%;
    height: 45px;
    cursor: pointer;
  }
`;
const AgeButtonSelected = styled.div`
  background-color: #ff7676;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 8vh;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  @media screen and (min-width: 37.5rem) {
    margin: 0px 15px;
    width: 20%;
    height: 45px;
    cursor: pointer;
  }
`;

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 30px 0px;
`;
const CompleteButton = styled.div`
  margin-bottom: 15px;
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  width: 110px;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  margin-bottom: 15px;
  background-color: #448b76;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  width: 110px;
  opacity: 0.6;
  height: 5px;
`;

export default function OauthUserReg() {
  const [userInfo, setUserInfo] = useState<any>({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
    imgUrl: "",
    want_region: "",
    want_vol: "",
    age: "",
    sex: "",
  });
  const [newPass, setNewPass] = useState<any>({
    password: "oauth",
    asswordCheck: "oauth",
  });

  //errorMessage
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [passCheckErrorMessage, setPassCheckErrorMessage] = useState("");
  const [nickCheckErrorMessage, setNickCheckErrorMessage] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  // setUserInfo({ ...userInfo, [key]: e.target.value });
  const [isNick, setIsNick] = useState(false);

  const history = useHistory();

  const GoUserDelete = () => {
    history.push("/UserDelete");
  };
  //????????? ??????

  const handleChange = (key: any) => (e: any) => {
    // ????????????, ???????????? ?????? ????????? , ???????????? ?????? userInfo ???????
    //?????? ?????? ????????? ????????? ???????????? ?????????

    //userinfo?????? ????????? ????????? ??????

    setUserInfo({...userInfo, [key]: e.target.value});

    console.log(userInfo);
    if (key === "man") {
      setUserInfo({...userInfo, sex: "??????"});
      setSex("??????");
    } else if (key === "woman") {
      setUserInfo({...userInfo, sex: "??????"});
      setSex("??????");
    }
    if (key === "teen") {
      setUserInfo({...userInfo, age: "????????? "});
      setAge("?????????");
    } else if (key === "adult") {
      setUserInfo({...userInfo, age: "??????"});
      setAge("??????");
    } else if (key === "senior") {
      setUserInfo({...userInfo, age: "??????"});
      setAge("??????");
    }

    if (key === "password") {
      setNewPass({...newPass, [key]: e.target.value});
    } else if (key === "passwordCheck") {
      setNewPass({...newPass, [key]: e.target.value});
    }

    // if (key === "newnickname") {
    //   console.log(newUserInfo);
    //   setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
    // }

    // if (key === "newSex") {
    //   console.log(newUserInfo);
    //   setNewUserInfo({ ...newUserInfo, [key]: "??????" });
    // } else if (key === "newSex") {
    //   console.log(newUserInfo);
    //   setNewUserInfo({ ...newUserInfo, [key]: "??????" });
    // }
  };
  const validateCheckPassword = (password: any, passwordCheck: any) => {
    if (password !== passwordCheck) {
      setPassCheckErrorMessage("????????? ??????????????? ??????????????????");
      return false;
    } else {
      setPassCheckErrorMessage("");
      return true;
    }
  };
  const validatePassword = (password: any) => {
    // 8????????? 16????????? ??? ??????, ??????, ???????????? ??????

    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!regPassword.test(password)) {
      setPassErrorMessage(
        "??????????????? 8~16???, ??????, ????????????,????????? ??????????????????",
      );
      return false;
    } else {
      setPassErrorMessage("");

      return true;
    }
  };

  const validateNickname = (nickname: any) => {
    //???????????? ????????? ????????? ????????? ??????.
    //????????? ?????? ??????
    const max = 8;
    const min = 2;

    if (nickname.length < min || nickname.length > max) {
      console.log("1??????, 9??????");
      setNickCheckErrorMessage("???????????? 2~8 ??? ??????????????????");
      return false;
    } else {
      setNickCheckErrorMessage("");
      console.log("2?????? 8??????");

      return true;
      //2->1 ????????? ??? ??????
      //9->7?????? ??????
      //1->0 ?????? ?????? x
    }
  };

  const handleNicknameCheck = () => {
    //userInfo ??? ????????? ???
    //handleChange??? ?????? ????????? ??????
    // validateNickname(nickname);
    //????????? ???????????? ?????? ????????? handlenick???
    //db??? ?????? nick??? ??????????????? ??????
    const valideNickname = validateNickname(userInfo.nickname);

    // console.log(s);
    if (userInfo.nickname && valideNickname) {
      axios
        .post(
          `${process.env.REACT_APP_API_URI}/auth/nickcheck`,
          {
            nickname: userInfo.nickname,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then(res => {
          console.log("??????");
          if (userInfo.nickname !== res.data.data) {
            setNickCheckErrorMessage("?????? ????????? ????????? ?????????.");
            setIsNick(true);
          }
        })
        .catch(() => {
          console.log("??????????????? ?????????");
          setNickCheckErrorMessage("????????? ????????? ?????????.");
          setIsNick(false);
        });
    }
    setIsNick(false);
  };
  const userInfoEditHandler = () => {
    const validPassword = validatePassword(newPass.password);
    const validNickname = validateNickname(userInfo.nickname);
    const validCheckPassword: any = validateCheckPassword(
      newPass.password,
      newPass.passwordCheck,
    );

    console.log(validNickname, validPassword, validCheckPassword, isNick);
    //???????????? ????????? ????????? ???????????????????
    //???????????? ????????? ??????  userinfo??? onchange??? ??????????????? ?????? ????????? ??????.

    console.log(userInfo);
    //??????????????? ????????? ?????? ????????? ??????
    //??????????????? ???????????????
    //???????????? ????????? ??????
    //?????? ???????????? ????????? ??????

    //??????????????? ????????? ?????? ???????????? ???????????????, ??????????????? ???????????? ??????????????? ????????? ??????.

    //?????????????????? + ???????????? ??????
    if (validNickname && isNick) {
      console.log("????????? ??????");
      axios
        .patch(
          `${process.env.REACT_APP_API_URI}/user/edit`,
          {
            email: userInfo.email,
            nickname: userInfo.nickname,
            password: userInfo.password,

            want_region: userInfo.want_region,
            want_vol: userInfo.want_vol,
            sex: userInfo.sex,
            age: userInfo.age,
            isopen: true,
            iscompany: false,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        )
        .then(res => {
          console.log(res.data.data);
          history.push("/UserMyPage");
        })
        .catch(err => {
          console.log(err);
        });
    }
    //?????? ????????? ????????? ????????? ??????

    //?????? ?????? ????????? ???????????? ????????? ??????

    //????????? ?????? ????????? ????????? ?????? ?????? ?????? ?????? ????????? ??????.

    //password??? ????????? ?????????, ???????????????,??? ??????????????????
    // if(va)
  };

  const getUserInfoHandler = () => {
    console.log(localStorage.getItem("accessToken"));
    //????????????, ?????????, ?????? ????????? ??????

    axios
      .get(`${process.env.REACT_APP_API_URI}/user/info`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "applicaton/json",
        },
      })

      .then(res => {
        console.log(res.data.data.email);
        console.log(res.data.data);

        setUserInfo({
          email: res.data.data.email,
          nickname: "",
          password: "oauth",
          want_region: res.data.data.want_region,
          want_vol: res.data.data.want_vol,
          sex: res.data.data.sex,
          age: res.data.data.age,
          iscompany: false,
        });
      })

      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfoHandler();
  }, []);
  return (
    <>
      <Header3 />
      <Wrapper>
        <MainContainer>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
          </LogoBox>
          <EditEmaill>?????? ?????? ??????</EditEmaill>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleChange("nickname")}
              defaultValue={userInfo.nickname}
              placeholder="?????????"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <CheckingPossibleOrNotBox>
            <PossibleOrNot> {nickCheckErrorMessage}</PossibleOrNot>
            <CheckingPossibleOrNotButton onClick={handleNicknameCheck}>
              ?????? ??????
            </CheckingPossibleOrNotButton>
          </CheckingPossibleOrNotBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleChange("want_region")}
              defaultValue={userInfo.want_region}
              placeholder="?????? ?????? ??????"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleChange("want_vol")}
              defaultValue={userInfo.want_vol}
              placeholder="?????? ?????? ??????"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          {userInfo.sex ? (
            userInfo.sex === "??????" ? (
              <SelectSexBox>
                <SelectedSexButton onClick={handleChange("man")}>
                  <SexImageBox src="./image/young-man.png"></SexImageBox>
                </SelectedSexButton>
                <SelectSexButton onClick={handleChange("woman")}>
                  <SexImageBox src="./image/young-woman.png"></SexImageBox>
                </SelectSexButton>
              </SelectSexBox>
            ) : (
              <SelectSexBox>
                <SelectSexButton onClick={handleChange("man")}>
                  <SexImageBox src="./image/young-man.png"></SexImageBox>
                </SelectSexButton>
                <SelectedSexButton onClick={handleChange("woman")}>
                  <SexImageBox src="./image/young-woman.png"></SexImageBox>
                </SelectedSexButton>
              </SelectSexBox>
            )
          ) : (
            <SelectSexBox>
              <SelectSexButton onClick={handleChange("man")}>
                <SexImageBox src="./image/young-man.png"></SexImageBox>
              </SelectSexButton>
              <SelectSexButton onClick={handleChange("woman")}>
                <SexImageBox src="./image/young-woman.png"></SexImageBox>
              </SelectSexButton>
            </SelectSexBox>
          )}
          {userInfo.age ? (
            age === "?????????" ? (
              <SelectBox>
                <AgeButtonSelected onClick={handleChange("teen")}>
                  ?????????
                </AgeButtonSelected>
                <AgeButton onClick={handleChange("adult")}>??????</AgeButton>
                <AgeButton onClick={handleChange("senior")}>??????</AgeButton>
              </SelectBox>
            ) : age === "??????" ? (
              <SelectBox>
                <AgeButton onClick={handleChange("teen")}>?????????</AgeButton>
                <AgeButtonSelected onClick={handleChange("adult")}>
                  ??????
                </AgeButtonSelected>
                <AgeButton onClick={handleChange("senior")}>??????</AgeButton>
              </SelectBox>
            ) : (
              <SelectBox>
                <AgeButton onClick={handleChange("teen")}>?????????</AgeButton>
                <AgeButton onClick={handleChange("adult")}>??????</AgeButton>
                <AgeButtonSelected onClick={handleChange("senior")}>
                  ??????
                </AgeButtonSelected>
              </SelectBox>
            )
          ) : (
            <SelectBox>
              <AgeButton onClick={handleChange("teen")}>?????????</AgeButton>
              <AgeButton onClick={handleChange("adult")}>??????</AgeButton>
              <AgeButton onClick={handleChange("senior")}>??????</AgeButton>
            </SelectBox>
          )}
          <CompleteBox>
            <CompleteButton onClick={userInfoEditHandler}>
              ???????????? ??????
            </CompleteButton>
          </CompleteBox>
        </MainContainer>
      </Wrapper>
    </>
  );
}

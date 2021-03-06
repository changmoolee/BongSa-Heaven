import {useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import Header3 from "../../components/common/Header3";
import axios from "axios";
import {issignin} from "../../modules/isSignIn";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 80px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 15%;
  object-fit: cover;
`;
const LogInImageBox = styled.div`
  display: none;
  @media screen and (min-width: 37.5rem) {
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin: 0px 0px 50px 0px;
  }
`;
const LogInImage = styled.img`
  width: 12%;
  object-fit: cover;
`;
const HeaderName = styled.span`
  color: #ff7676;
  margin-left: 5%;
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
  @media screen and (min-width: 37.5rem) {
    margin-left: 4%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #ff7676;
    cursor: pointer;
  }
`;
const SignInWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
  @media screen and (min-width: 37.5rem) {
    margin: 0;
  }
`;
const SignInWhiteInput = styled.input`
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

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 30px 0px;
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
  height: 25px;
  width: 110px;

  cursor: pointer;
`;

const GoogleButton = styled.div`
  margin-bottom: 15px;
  background-image: url("https://ifh.cc/g/CVdhQw.png");

  background-size: 100% 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  height: 25px;
  width: 115px;
  cursor: pointer;
`;

const KakaoButton = styled.div`
  margin-bottom: 15px;
  background-image: url("https://ifh.cc/g/nuizZs.png");

  background-size: 100% 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  height: 25px;
  width: 115px;
  cursor: pointer;
`;

const SingUpButton = styled.div`
  margin-bottom: 15px;
  background-color: #448b76;

  background-size: 100% 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  height: 25px;
  width: 115px;
  cursor: pointer;
`;

const GotoMainByGuestButton = styled.div`
  margin-bottom: 15px;
  background-color: #bb7bfc;

  background-size: 100% 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  height: 25px;
  width: 115px;
  cursor: pointer;
`;

export default function SignIn({setIsLogin, setIsUserLogin}: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  //????????? ????????? ??????????????? ???????????? ???????????? ????????? ??????????????????,
  const GoogleOauth = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email&prompt=select_account`;

  const kakaoOauth = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  const googleControl = () => {
    sessionStorage.setItem("life", "have");
    sessionStorage.setItem("oauth", "have");
    window.location.assign(GoogleOauth);
  };
  const kakaoControl = () => {
    sessionStorage.setItem("life", "have");
    sessionStorage.setItem("oauth", "have");
    window.location.assign(kakaoOauth);
  };

  const handleEmail = (e: any) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    e.preventDefault();
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  // const onKeyPress = () => {
  //   if (window.event.keyCode == 13) {
  //     console.log("enter?????? ?????????");
  //     handleLoginRequest();
  //   }
  // };

  const handleLoginRequest = async (e: any) => {
    //????????? ??????
    if (!email) {
      setErrorMessage("???????????? ??????????????????");
    } else if (!password) {
      setErrorMessage("???????????? ??????????????????");
    } else if (!email && !password) {
      setErrorMessage("???????????? ??????????????? ???????????????.");
    } else if (email && password) {
      axios
        .post(
          `${process.env.REACT_APP_API_URI}/auth/signin`,
          {email: email, password: password},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        )
        .then((res: any) =>
          //????????????????????? ??????, ???????????? ??????

          localStorage.setItem("accessToken", res.data.accessToken),
        )
        .then(res => {
          sessionStorage.setItem("life", "have");
        })
        .then(res =>
          axios
            .get(`${process.env.REACT_APP_API_URI}/user/info`, {
              headers: {
                authorization: `Bearer ` + localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
              },
              withCredentials: true,
            })
            .then(res => {
              // console.log(res);
              console.log("res.data.data.iscompany", res.data.data.iscompany);
              if (res.data.data.iscompany !== undefined) {
                setIsUserLogin("recruiter");
                setIsLogin(true);
                dispatch(issignin());

                history.push("/");
              } else {
                setIsLogin(true);
                dispatch(issignin());

                history.push("/");
              }
            }),
        )
        .catch(err => {
          console.log(err);
          setErrorMessage("????????? ?????? ??????????????? ???????????? ????????????.");
        });
    }
  };

  //?????????????????? ??????
  const moveToSignUP = () => {
    history.push("/signup");
  };
  const moveToMain = () => {
    history.push("/");
  };
  //??????????????? ????????? ????????? ????????? ??????.
  //authcode??? ???????????????,
  //????????? ????????? ??????????????? ????????? ?????? (????????? 10??? ?????? ????????? ????????????)
  //?????? ??????????????? 5????????? ??????, 5????????? ????????? ????????????(????????????)
  const emailAuthCodeHandler = () => {
    const url = new URL(window.location.href);

    const searchs = url.search;
    console.log(searchs.split("=")[0]);

    if (searchs.split("=")[0] === "?authCode") {
      const code = searchs.split("=")[1];

      console.log(code);
      axios
        .post(
          `${process.env.REACT_APP_API_URI}/auth/confirmemail`,
          {code: code},

          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then(data => {
          console.log("??????");
          history.push("/SignIn");
          setIsLogin(true);
          dispatch(issignin());
        })
        .catch(err => {
          console.log(err, "erro");
        });
    }
  };
  useEffect(() => {
    emailAuthCodeHandler();
  }, []);

  // console.log(window.location.href);
  return (
    <>
      <Wrapper>
        <MainContainer>
          <LogInImageBox onClick={moveToMain}>
            <LogInImage src="./image/logo2.png" />
            <HeaderName>????????????</HeaderName>
          </LogInImageBox>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
            <HeaderName onClick={moveToMain}>????????????</HeaderName>
          </LogoBox>
          <SignInWhiteBox>
            <SignInWhiteInput
              type="email"
              placeholder="?????????(?????????)"
              onChange={handleEmail}
            ></SignInWhiteInput>
          </SignInWhiteBox>

          <SignInWhiteBox>
            <SignInWhiteInput
              type="password"
              placeholder="????????????"
              onChange={handlePassword}
              // onKeyUp={onKeyPress}
            ></SignInWhiteInput>
          </SignInWhiteBox>

          {errorMessage}

          <CompleteBox>
            <CompleteButton onClick={handleLoginRequest}>?????????</CompleteButton>
            <GoogleButton onClick={googleControl}></GoogleButton>
            <KakaoButton onClick={kakaoControl}></KakaoButton>
            <SingUpButton onClick={moveToSignUP}>????????????</SingUpButton>
            <GotoMainByGuestButton onClick={moveToMain}>
              ????????????
            </GotoMainByGuestButton>
          </CompleteBox>
        </MainContainer>
      </Wrapper>
    </>
  );
}

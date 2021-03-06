import styled from "styled-components";
import {useHistory} from "react-router-dom";
import Header2 from "../../components/common/Header2";

const SignupSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
const GeneralButton = styled.div`
  background-color: #4af197;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 20vh;
  cursor: pointer;

  @media screen and (min-width: 37.5rem) {
    background-color: rgba(74, 241, 151, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 400px;
    &:hover {
      background-color: #4af197;
      transition: 1s;
    }
  }
`;
const GeneralButtonTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 37.5rem) {
    margin-top: 10px;
    font-size: 24px;
  }
`;
const GeneralButtonSubtitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RecruiterButton = styled.div`
  background-color: #bb7bfc;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 20vh;
  margin-top: 10vh;
  cursor: pointer;
  @media screen and (min-width: 37.5rem) {
    width: 400px;
    background-color: rgba(187, 123, 252, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
      background-color: #bb7bfc;
      transition: 1s;
    }
  }
`;
const RecruiterButtonTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 37.5rem) {
    margin-top: 10px;
    font-size: 24px;
  }
`;
const RecruiterButtonSubtitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default function SignUp() {
  const history = useHistory();
  const movetToUserSignUp = () => {
    history.push("/UserSignUp");
  };
  const movetToRecruiterSignUp = () => {
    history.push("/RecruiterSignUp");
  };

  return (
    <>
      <Header2 componentName={"회원가입"} />

      <SignupSpace></SignupSpace>
      <SelectBox>
        <GeneralButton onClick={movetToUserSignUp}>
          <GeneralButtonTitle>일반 회원</GeneralButtonTitle>
          <GeneralButtonSubtitle>봉사를 희망하는 회원</GeneralButtonSubtitle>
        </GeneralButton>

        <RecruiterButton onClick={movetToRecruiterSignUp}>
          <RecruiterButtonTitle>봉사 모집자</RecruiterButtonTitle>
          <RecruiterButtonSubtitle>봉사자를 찾는 회원</RecruiterButtonSubtitle>
        </RecruiterButton>
      </SelectBox>
    </>
  );
}

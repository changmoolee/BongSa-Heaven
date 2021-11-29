import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`;
const HeaderText = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconBox = styled.div`
  right: 5vw;
`;

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
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

  ::placeholder {
  }
`;
const CheckingPossibleOrNotBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
`;

const CheckingPossibleOrNotButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
`;

const SelectSexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;
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
`;
const SexImageBox = styled.img`
  margin: 1vh 0vh 0.5vh 0vh;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px 0px 15px 0px;
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
`;

const CompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 30px 0px;
`;
const CompleteButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
`;

export default function UserEdit() {
  return (
    <>
      <Wrapper>
        <Header2 />
        <LogoBox>
          <Logo src="./image/logo2.png"></Logo>
        </LogoBox>
        kimcoding@codestate.com
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="닉네임"></SignUpWhiteInput>
        </SignUpWhiteBox>
        <CheckingPossibleOrNotBox>
          <PossibleOrNot>사용 가능</PossibleOrNot>
          <CheckingPossibleOrNotButton>중복 확인</CheckingPossibleOrNotButton>
        </CheckingPossibleOrNotBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="비밀번호"></SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="비밀번호 확인"></SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="희망 봉사 지역"></SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="희망 봉사 활동"></SignUpWhiteInput>
        </SignUpWhiteBox>
        <SelectSexBox>
          <SelectSexButton>
            <SexImageBox src="./image/young-man.png"></SexImageBox>
            남성
          </SelectSexButton>
          <SelectSexButton>
            <SexImageBox src="./image/young-woman.png"></SexImageBox>
            여성
          </SelectSexButton>
        </SelectSexBox>
        <SelectBox>
          <AgeButton>청소년</AgeButton>
          <AgeButton>청년</AgeButton>
          <AgeButton>장년</AgeButton>
        </SelectBox>
        <CompleteBox>
          <CompleteButton>회원가입 완료</CompleteButton>
        </CompleteBox>
      </Wrapper>
    </>
  );
}

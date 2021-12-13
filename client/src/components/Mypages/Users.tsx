import React from "react";
import {useHistory} from "react-router";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";

const SeeRecruiterContainer = styled.div`
  margin-bottom: 13px;
  margin-left: 17.5px;
  width: 340px;
  height: 290px;
  background: #ffffff;
  box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RecruiterUserName = styled.div`
  margin-top: 26px;
  width: 111px;
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #448b76;
`;
const SendMaillBtn = styled.button`
  margin-top: 12px;
  margin-bottom: 38px;
  width: 98px;
  height: 28px;
  background: #f7f7f7;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
const VolRegion = styled.div`
  border-bottom: solid 1px rgb(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 300px;
  height: 27px;
  display: flex;
`;
const VolType = styled.div`
  border-bottom: solid 1px rgb(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 300px;
  height: 27px;
  display: flex;
`;
const RecruiterGroupName = styled.div`
  border-bottom: solid 1px rgb(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 300px;
  height: 27px;
  display: flex;
`;
const LeftBox = styled.div`
  width: 190px;
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
const RightBox = styled.div`
  width: 110px;
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;
export default function Recruiters(list: any) {
  const history = useHistory();
  console.log(list.list.nickname);
  console.log(list.list.want_region);
  console.log(list.list.want_vol);
  console.log(list.list.sex);
  console.log(list.list.age);

  const GoMaillWrite = () => {
    history.push("/MaillWrite");
  };
  return (
    <>
      <SeeRecruiterContainer>
        <RecruiterUserName>{list.list.nickname} 님</RecruiterUserName>
        <SendMaillBtn onClick={GoMaillWrite}>
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp; 쪽지 쓰기
        </SendMaillBtn>
        <VolRegion>
          <LeftBox>희망 봉사 지역</LeftBox>
          <RightBox>{list.list.want_region}</RightBox>
        </VolRegion>
        <VolType>
          <LeftBox>희망 봉사 종류</LeftBox>
          <RightBox>{list.list.want_vol}</RightBox>
        </VolType>
        <RecruiterGroupName>
          <LeftBox>성별</LeftBox>
          <RightBox>{list.list.sex}</RightBox>
        </RecruiterGroupName>
        <RecruiterGroupName>
          <LeftBox>나이대</LeftBox>
          <RightBox>{list.list.age}</RightBox>
        </RecruiterGroupName>
      </SeeRecruiterContainer>
    </>
  );
}

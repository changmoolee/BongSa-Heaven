import {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/common/Header";
import BestCrew from "../../components/Main/BestCrew";
import FreeBoard from "../../components/Main/FreeBoard";

export default function MainPage({GoToFreeBoardContent, userId}: any) {
  const [Top3crewBoardinfo, setTop3CrewBoardinfo] = useState([]);
  const [crewBoardinfo, setCrewBoardinfo] = useState([]);
  const [freeBoardinfo, setFreeBoardinfo] = useState([]);

  const getCrewBoardList = () => {
    axios
      .get("http://localhost:8080/board/cblist")
      .then(res => {
        setCrewBoardinfo(res.data.data);
        setTop3CrewBoardinfo(res.data.cbTopThree);
      })
      .catch(err => console.log(err));
  };

  const getFreeBoardList = () => {
    axios
      .get("http://localhost:8080/board/fblist")
      .then(res => {
        setFreeBoardinfo(res.data.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCrewBoardList();
    getFreeBoardList();
  }, []);

  return (
    <>
      <Header />
      <BestCrew
        crewBoardinfo={crewBoardinfo}
        Top3crewBoardinfo={Top3crewBoardinfo}
      />
      <FreeBoard
        userId={userId}
        GoToFreeBoardContent={GoToFreeBoardContent}
        freeBoardinfo={freeBoardinfo}
      />
    </>
  );
}

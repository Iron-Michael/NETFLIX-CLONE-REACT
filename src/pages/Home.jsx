import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row Rollid="1" title="UpComing" fetchURL={Request.requestUpcoming} />
      <Row Rollid="2" title="Popular" fetchURL={Request.requestPopular} />
      <Row Rollid="3" title="Horror" fetchURL={Request.requestHorror} />
      <Row Rollid="4" title="Top Rated" fetchURL={Request.requestTopRated} />
      <Row Rollid="5" title="Trending" fetchURL={Request.requestTrending} />
    </>
  );
};

export default Home;

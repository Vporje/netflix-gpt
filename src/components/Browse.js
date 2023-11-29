import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GPTsearchPage from "./GPTsearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleSelector = useSelector((store) => store.gpt.showToggleState);
  /*
  - primaryContainer
    - bgVideo
    - videoTitle
    - Buttons => play, moreInfo
  - secondaryContainer
    - categoryList * N (vertically down)
      - videosList * N (horizontally)
  */

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {toggleSelector ? <GPTsearchPage /> :
      <>
        <PrimaryContainer />
        <SecondaryContainer />
      </>}
    </div>
  );
};

export default Browse;

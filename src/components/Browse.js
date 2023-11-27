import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";


const Browse = () => {
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

  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

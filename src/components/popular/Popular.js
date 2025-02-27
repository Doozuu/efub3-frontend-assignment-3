import PopularMovies from "./PopularMovies";
import NavBar from "../common/NavBar";

// 유명 영화
const Popular = ({ movies }) => {
  return (
    <>
      <NavBar />
      <PopularMovies movies={movies} />
    </>
  );
};

export default Popular;

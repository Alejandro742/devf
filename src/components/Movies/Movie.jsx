const Movie = ({ movie }) => {
  const { _id, name, rottenTomatoesScore, runtimeInMinutes, academyAwardWins } =
    movie;
  return (
    <tr>
      <td>{name}</td>
      <td>{rottenTomatoesScore} / 100</td>
      <td>{(runtimeInMinutes / 60).toFixed(2)}</td>
      <td>{academyAwardWins}</td>
    </tr>
  );
};

export default Movie;

import Card from "../components/Card";
export default function MovieSearch({ movies, setSelectedMovie }) {
  let cards = [];
  if (movies) {
    cards = movies.map((item) => {
      return (
        <Card
          title={item.Title}
          poster={item.Poster}
          year={item.Year}
          key={item.imdbID}
          type={item.Type}
          setSelectedMovie={setSelectedMovie}
        />
      );
    });
  } else {
    return <div></div>;
  }

  return <div className="movies-search">{cards}</div>;
}

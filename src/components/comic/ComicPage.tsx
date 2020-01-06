import React, { useContext, useEffect } from "react";
import { Store } from "./Store";

interface IEpisode {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  airdate: string,
  airtime: string,
  airstamp: string,
  runtime: number,
  image: {
    medium: string,
    original: string
  },
  summary: string
}

function ComicPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  return (
    <React.Fragment>
      <p>Pick your favorite episode! </p>
      <section>
        {state.episodes.map( (episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img src={episode.image.medium} alt={episode.name} />
              <div>{episode.name}</div>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default ComicPage;

export default function ChosenEpisode({chosenEpisode}) {
    return (
        <div>
            <h4>{chosenEpisode.opening_crawl}</h4>
            <p>{chosenEpisode.director}</p>
            <p>{chosenEpisode.producer}</p>
            <p>{chosenEpisode.release_date}</p>
        </div>
        )
     }

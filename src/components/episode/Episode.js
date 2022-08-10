import {useState} from "react";
import {getEpisode} from "../../services/people.services";
import ChosenEpisode from "../chosenEpisode/ChosenEpisode";

export default function Episode({episode}) {
    const [toggle, setToggle] = useState(false);
    const [chosenEpisode, setChosenEpisode] = useState([]);
    function findEpisode (id) {
        setToggle(!toggle);
        getEpisode(id).then(value => {
            setChosenEpisode(value)
        })
    }
    return (
        <div>
            <p>Episode {episode.episode_id} - {episode.title} - <button onClick={() => {
                findEpisode(episode.episode_id)
            }}>about</button></p>
            {
                chosenEpisode && toggle && <ChosenEpisode chosenEpisode={chosenEpisode}/>
            }
        </div>
    )
}

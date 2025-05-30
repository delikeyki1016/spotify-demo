import { useState } from "react";
import EmptyPlayList from "./EmptyPlayList";

const Library = () => {
    const [myPlaylist, setMyPlaylist] = useState(null)
    return <>
        {!myPlaylist ? (
            <EmptyPlayList />
        ) : (
            <>
                <h3>My playlist</h3>
                <ul>
                    <li>song1</li>
                </ul>
            </>
        )}
    </>;
};

export default Library;

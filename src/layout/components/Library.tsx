import EmptyPlayList from "./EmptyPlayList";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlayLists";
import { Box } from "@mui/material";
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

const Library = () => {
    const {data} = useGetCurrentUserPlaylists({limit:10, offset:0 })
    console.log("ddd2", data)
    return <>
        {data && data.items.length > 0 ? (
            <Box display="flex" flexDirection={"column"} gap={"8px"} sx={{maxHeight: "calc(100vh - 220px)", overflowY: "auto"}}>
                {data.items.map((playlist, index)=> (
                    <Box display="flex" gap={"8px"} key={index}>
                        {playlist.images ? (
                            <img src={playlist.images[0].url} alt="" style={{width: 50, borderRadius: "8px" }} />
                        ) : (
                            <ImageNotSupportedIcon sx={{fontSize: 50}} />
                        )}
                        
                        <Box display="flex" flexDirection={"column"} gap={"4px"}>
                            <span style={{ fontWeight: 600}}>{playlist.name}</span>
                            <span style={{color: "#666"}}>{playlist.owner?.display_name}</span>
                        </Box>
                    </Box>
                ))}
            </Box>
        ):(
            <EmptyPlayList />
        )}
    </>;
};

export default Library;

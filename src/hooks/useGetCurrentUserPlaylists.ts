import { useQuery } from "@tanstack/react-query"
import { getCurrentUserPlaylists } from "../apis/playlistApi"
import { GetCurrentUserPlaylistsRequest } from "../models/playlist"

const useGetCurrentUserPlaylists = ({limit, offset}:GetCurrentUserPlaylistsRequest) => {
    return useQuery({
        queryKey: ['current-user-playlists'],
        queryFn: ()=>{
            return getCurrentUserPlaylists({limit, offset})
        }
    })
}

export default useGetCurrentUserPlaylists
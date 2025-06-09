import { ApiResponse } from "./apiResponse";
import { ExternalUrls, Image, Owner } from "./commonType";

export interface GetCurrentUserPlaylistsRequest {
    limit?: number;
    offset?: number;
}

// 키값이 필요없기 때문에 type으로 선언함 
export type GetCurrentUserPlaylistResponse = ApiResponse<SimplifiedPlaylist>

export interface SimplifiedPlaylist {
    collaborative?: boolean;
    description?: string;
    external_urls?: ExternalUrls;
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner?: Owner;
    public?: boolean;
    snapshot_id?: string;
    track?: {
        href?: string;
        total?: number;
    }
    type?: string;
    url?: string;
}
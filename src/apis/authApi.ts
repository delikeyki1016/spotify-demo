import axios from "axios"
import { CLIENT_ID, CLIENT_SECRET } from "../configs/authConfig"
import { ClientCredentialTokenResponse } from "../models/auth"

const encodedBase64 = (data:string):string => {
    if (typeof window !== "undefined") { 
        return btoa(data) // 브라우저 환경
    } else {
        // node.js 환경
        return Buffer.from(data).toString("base64")
    }   
}

// async는 promise를 리턴함
export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    try {
        const body = new URLSearchParams({
            grant_type: "client_credentials"
        })
        const response = await axios.post("https://accounts.spotify.com/api/token", body, {
            headers: {
                Authorization: `Basic ${encodedBase64(CLIENT_ID+":"+CLIENT_SECRET)}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        return response.data
    } catch(error) {
        throw new Error("Fail to fetch client credential token")
    }
}
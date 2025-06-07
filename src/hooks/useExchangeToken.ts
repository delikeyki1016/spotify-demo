import { useMutation, useQueryClient } from "@tanstack/react-query"
import { exchangeToken } from "../apis/authApi"
import { ExchangeTokenResponse } from "../models/auth";

const useExchangeToken = () => {
    const queryClient = useQueryClient()
    // useMutation 타입지정: 응답값, 에러값, 매개변수 타입을 지정함 
    return useMutation<ExchangeTokenResponse, Error, {code:string, codeVerifier:string}>({
        mutationFn:({code, codeVerifier})=> exchangeToken(code, codeVerifier),
        onSuccess:(data)=> {
            // console.log("token:", data.access_token)
            localStorage.setItem('access_token', data.access_token);
            // 프로파일 사진을 업데이트하기 위해 쿼리키의 캐시값을 무효화 시킴 
            queryClient.invalidateQueries({
                queryKey: ['current-user-profile']
            })
        }
    })
}

export default useExchangeToken
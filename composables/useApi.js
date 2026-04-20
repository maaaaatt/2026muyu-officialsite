/* 
攔截器完整範例
https://juejin.cn/post/7173507227104313352

簡單版
https://stackoverflow.com/questions/75434573/redefine-fetch-in-nuxt3-with-global-onrequest-handler
*/
export const useApi = (url, options={})=> {
    const config = useRuntimeConfig();
    const { apiPath, siteEnv } = config.public;
    const baseURL = siteEnv=='dev' ? '/API/' : `${apiPath}/API/`;
    return useFetch(url, {
        ...options,
        baseURL,
        onRequest({request, options}){
        },
        onResponse({response}){
            // response._data = JSON.parse(response._data)
            // return response._data;
        },
        onResponseError({response}) {
            console.log('error: ', response.status);
        }
    })
}
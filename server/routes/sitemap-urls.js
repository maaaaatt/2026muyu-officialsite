export default defineSitemapEventHandler(async ()=>{
    const config = useRuntimeConfig();
    const { apiPath, rootPath } = config.public;
    const {data:resNewsData} = await $fetch(apiPath+'/API/NewsList', {
        onRequest({request}){
        },
        onResponse({response}){
            // response._data = JSON.parse(response._data)
            // return response._data;
        }
    });

    const result = resNewsData.map(x=>{
        return {
            loc:`${rootPath}/news/detail/${x.id}`,
            lastmod:new Date(`${x.date}T00:00:00`)
        }
    })

    return result
})
export default defineEventHandler((event)=>{
    let loginStatus = getCookie(event, 'login');
    loginStatus = typeof loginStatus === 'undefined' ? false : loginStatus;
    return {loginStatus};
})
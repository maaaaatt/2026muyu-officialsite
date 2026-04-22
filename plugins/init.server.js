import Cookie from 'js-cookie';
import { useSiteInfoStore } from '@/stores';

function cookieFromRequestHeaders(key) {
    const headers = useRequestHeaders(['cookie']);
    if ('cookie' in headers) {
        const cookie = headers.cookie?.split(';').find(
            c => c.trim().startsWith(`${key}=`)
        );
        if (cookie) {
            return cookie.split('=')[1];
        }
    }
    return undefined;
}

export default defineNuxtPlugin(async (nuxtApp)=>{
    const loginStatus = cookieFromRequestHeaders('loginStatus') ?? Cookie.get('loginStatus') ?? 0;
    const store = useSiteInfoStore(nuxtApp.$pinia);
    // store.login(loginStatus);
    // await store.getInfo();
});
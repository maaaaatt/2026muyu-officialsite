// abortNavigation(err)
// 可以在中間件中回傳 abortNavigation() 來中止導航，並可以選擇是否傳入錯誤訊息。
import { useSiteInfoStore } from '@/stores';

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useSiteInfoStore();
    if (to.path == '/member' && store.loginStatus==0) {
        return navigateTo('/login');
    }
});
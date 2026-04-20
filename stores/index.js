import { defineStore } from 'pinia';
import createState from './state';
import Cookie from 'js-cookie';

export const useSiteInfoStore = defineStore('site-info', {
    state:()=>(createState()),
    getters:{
        meta       : state=>state._meta,
        nav        : state=>state._nav,
        loginStatus: state=>parseInt(state._loginStatus)
    },
    actions:{
        async getInfo(){
            // const {data} = await useApi(useRuntimeConfig().public.apiPath+'SiteInfo');
            this._meta.title = 'Site Title';
            this._meta.description = 'Site Description';
            this._nav = [
                {name:'Home', link:'/'},
                {name:'About', link:'/about'},
                {name:'Login', link:'/login'},
                {name:'Dynamic Route', link:'/admin-admin/abc'},
                {name:'MemberOnley', link:'/member'},
                {name:'Contact', link:'/contact'},
                {name:'Error', link:'/test'},
            ];
        },
        login(val){
            this._loginStatus = val;
            Cookie.set('loginStatus', this._loginStatus);
        },
    }
});
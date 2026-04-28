const createState = ()=>({
    _loginStatus:0,
    _meta:{
        title:'沐語兒童復健診所',
        description:''
    },
    _nav:[
        {name:'關於沐語', link:'/about',
            subnav:[
                {name:'診所起源', link:'/about#origin'},
                {name:'沐語團隊', link:'/about#team'},
            ]
        },
        {name:'我們的服務', link:'/service',
            subnav:[
                {name:'復健科', link:'/service/rehabilitation'},
                {name:'小兒科 感冒家醫、疫苗注射', link:'/service/pediatrics'},
                {name:'復健治療項目', link:'/service/items'},
                {name:'特色輔助復健', link:'/service/featured-therapy'},
            ]
        },
        {name:'就診指引', link:'/guide',
            subnav:[
                {name:'就診流程', link:'/guide#process'},
                {name:'就診常見問題', link:'/guide/faq'},
                {name:'診所環境介紹導覽', link:'/guide/environment'},
                {name:'給家長 / 孩子的訊息', link:'/guide#message'},
            ]
        },
        {name:'最新消息與知識', link:'/news',
            subnav:[
                {name:'最新消息', link:'#'},
                {name:'常見問題', link:'#'},
                {name:'衛教知識', link:'#'},
                {name:'發展里程碑', link:'#'},
            ]
        },
    ]
});
export default createState
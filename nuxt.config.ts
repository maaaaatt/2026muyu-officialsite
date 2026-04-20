// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/*
	                                                                                                        
	                                                                                                        
	                                                          ffffffffffffffff    iiii                      
	                                                         f::::::::::::::::f  i::::i                     
	                                                        f::::::::::::::::::f  iiii                      
	                                                        f::::::fffffff:::::f                            
	    cccccccccccccccc   ooooooooooo   nnnn  nnnnnnnn     f:::::f       ffffffiiiiiii    ggggggggg   ggggg
	  cc:::::::::::::::c oo:::::::::::oo n:::nn::::::::nn   f:::::f             i:::::i   g:::::::::ggg::::g
	 c:::::::::::::::::co:::::::::::::::on::::::::::::::nn f:::::::ffffff        i::::i  g:::::::::::::::::g
	c:::::::cccccc:::::co:::::ooooo:::::onn:::::::::::::::nf::::::::::::f        i::::i g::::::ggggg::::::gg
	c::::::c     ccccccco::::o     o::::o  n:::::nnnn:::::nf::::::::::::f        i::::i g:::::g     g:::::g 
	c:::::c             o::::o     o::::o  n::::n    n::::nf:::::::ffffff        i::::i g:::::g     g:::::g 
	c:::::c             o::::o     o::::o  n::::n    n::::n f:::::f              i::::i g:::::g     g:::::g 
	c::::::c     ccccccco::::o     o::::o  n::::n    n::::n f:::::f              i::::i g::::::g    g:::::g 
	c:::::::cccccc:::::co:::::ooooo:::::o  n::::n    n::::nf:::::::f            i::::::ig:::::::ggggg:::::g 
	 c:::::::::::::::::co:::::::::::::::o  n::::n    n::::nf:::::::f            i::::::i g::::::::::::::::g 
	  cc:::::::::::::::c oo:::::::::::oo   n::::n    n::::nf:::::::f            i::::::i  gg::::::::::::::g 
	    cccccccccccccccc   ooooooooooo     nnnnnn    nnnnnnfffffffff            iiiiiiii    gggggggg::::::g 
	                                                                                                g:::::g 
	                                                                                    gggggg      g:::::g 
	                                                                                    g:::::gg   gg:::::g 
	                                                                                     g::::::ggg:::::::g 
	                                                                                      gg:::::::::::::g  
	                                                                                        ggg::::::ggg    
	                                                                                           gggggg       
	*/
	
	/*
	不能公開的金鑰或敏感訊息，僅放置在 runtimeConfig 中而且不在 public 屬性內，
	runtimeConfig.public 通常放的是前後端會使用到且不常修改的常數。
	而 App Config 則是當伺服器端與客戶端需要使用的設置，
	如主題顏色、是否啟用深色模式等這類可以被使用者調整變動的且需要具有響應性，就可以放置在 appConfig 之中。
	*/
	devtools: { enabled: true },
	runtimeConfig:{
		apiSecret:'',
		admin:['matt.chen@juicystudio.com.tw'],
		public:{
			rootPath:'',
			apiPath:'',
			gaId:'',
		}
	},
	/*
	                                                               
	            dddddddd                                           
	            d::::::d                                           
	            d::::::d                                           
	            d::::::d                                           
	            d:::::d                                            
	    ddddddddd:::::d     eeeeeeeeeeee  vvvvvvv           vvvvvvv
	  dd::::::::::::::d   ee::::::::::::ee v:::::v         v:::::v 
	 d::::::::::::::::d  e::::::eeeee:::::eev:::::v       v:::::v  
	d:::::::ddddd:::::d e::::::e     e:::::e v:::::v     v:::::v   
	d::::::d    d:::::d e:::::::eeeee::::::e  v:::::v   v:::::v    
	d:::::d     d:::::d e:::::::::::::::::e    v:::::v v:::::v     
	d:::::d     d:::::d e::::::eeeeeeeeeee      v:::::v:::::v      
	d:::::d     d:::::d e:::::::e                v:::::::::v       
	d::::::ddddd::::::dde::::::::e                v:::::::v        
	 d:::::::::::::::::d e::::::::eeeeeeee         v:::::v         
	  d:::::::::ddd::::d  ee:::::::::::::e          v:::v          
	   ddddddddd   ddddd    eeeeeeeeeeeeee           vvv           
	                                                               
	                                                               
	                                                               
	                                                               
	                                                               
	                                                               
	                                                               
	*/
	devServer:{
		host:'0.0.0.0',
		port:443
	},
	/*
	                                                         
	                                                         
	                                                         
	                                                         
	                                                         
	                                                         
	  aaaaaaaaaaaaa  ppppp   ppppppppp   ppppp   ppppppppp   
	  a::::::::::::a p::::ppp:::::::::p  p::::ppp:::::::::p  
	  aaaaaaaaa:::::ap:::::::::::::::::p p:::::::::::::::::p 
	           a::::app::::::ppppp::::::ppp::::::ppppp::::::p
	    aaaaaaa:::::a p:::::p     p:::::p p:::::p     p:::::p
	  aa::::::::::::a p:::::p     p:::::p p:::::p     p:::::p
	 a::::aaaa::::::a p:::::p     p:::::p p:::::p     p:::::p
	a::::a    a:::::a p:::::p    p::::::p p:::::p    p::::::p
	a::::a    a:::::a p:::::ppppp:::::::p p:::::ppppp:::::::p
	a:::::aaaa::::::a p::::::::::::::::p  p::::::::::::::::p 
	 a::::::::::aa:::ap::::::::::::::pp   p::::::::::::::pp  
	  aaaaaaaaaa  aaaap::::::pppppppp     p::::::pppppppp    
	                  p:::::p             p:::::p            
	                  p:::::p             p:::::p            
	                 p:::::::p           p:::::::p           
	                 p:::::::p           p:::::::p           
	                 p:::::::p           p:::::::p           
	                 ppppppppp           ppppppppp           
	                                                         
	*/
	app: {
		head: {
			htmlAttrs:{
				lang:'zh-TW'
			},
			meta:[
				{ charset: 'utf-8' },
				{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
				{ 'http-equiv': 'cache-control', content: 'no-cache' },
				{ 'http-equiv': 'expires', content: '0' },
				{ 'http-equiv': 'pragma', content: 'no-cache' },
				{ name:'viewport', content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			],
			script:[
				{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'},
				{ src: 'https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js' },
				// { src: '/assets/SplitText.min.js' },
			],
			link:[
				{ rel:'shortcut icon', type:'image/png', href:'/favicon.png'},
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css' }
			]
    	}
	},
	css:['~/assets/css/all.scss'],
	/*
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	    ssssssssss       eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvv eeeeeeeeeeee    rrrrr   rrrrrrrrr   
	  ss::::::::::s    ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::vee::::::::::::ee  r::::rrr:::::::::r  
	ss:::::::::::::s  e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::ve::::::eeeee:::::eer:::::::::::::::::r 
	s::::::ssss:::::se::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::ve::::::e     e:::::err::::::rrrrr::::::r
	 s:::::s  ssssss e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v e:::::::eeeee::::::e r:::::r     r:::::r
	   s::::::s      e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v  e:::::::::::::::::e  r:::::r     rrrrrrr
	      s::::::s   e::::::eeeeeeeeeee   r:::::r               v:::::v:::::v   e::::::eeeeeeeeeee   r:::::r            
	ssssss   s:::::s e:::::::e            r:::::r                v:::::::::v    e:::::::e            r:::::r            
	s:::::ssss::::::se::::::::e           r:::::r                 v:::::::v     e::::::::e           r:::::r            
	s::::::::::::::s  e::::::::eeeeeeee   r:::::r                  v:::::v       e::::::::eeeeeeee   r:::::r            
	 s:::::::::::ss    ee:::::::::::::e   r:::::r                   v:::v         ee:::::::::::::e   r:::::r            
	  sssssssssss        eeeeeeeeeeeeee   rrrrrrr                    vvv            eeeeeeeeeeeeee   rrrrrrr            
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	                                                                                                                    
	*/
	nitro:{
		preset:'node-server',
	},
	server:{
		port:process.env.PORT || 3000
	},
	/* 
	                                                  
	                                                  
	 333333333333333        000000000       1111111   
	3:::::::::::::::33    00:::::::::00    1::::::1   
	3::::::33333::::::3 00:::::::::::::00 1:::::::1   
	3333333     3:::::30:::::::000:::::::0111:::::1   
	            3:::::30::::::0   0::::::0   1::::1   
	            3:::::30:::::0     0:::::0   1::::1   
	    33333333:::::3 0:::::0     0:::::0   1::::1   
	    3:::::::::::3  0:::::0 000 0:::::0   1::::l   
	    33333333:::::3 0:::::0 000 0:::::0   1::::l   
	            3:::::30:::::0     0:::::0   1::::l   
	            3:::::30:::::0     0:::::0   1::::l   
	            3:::::30::::::0   0::::::0   1::::l   
	3333333     3:::::30:::::::000:::::::0111::::::111
	3::::::33333::::::3 00:::::::::::::00 1::::::::::1
	3:::::::::::::::33    00:::::::::00   1::::::::::1
	 333333333333333        000000000     111111111111
	                                                  
	                                                  
	                                                  
	                                                  
	                                                  
	                                                  
	Nginx設定http to https
	https://damn99.com/2020-04-17-nginx-redirecttohttps/
	*/
	routeRules:{
		'/oldPage':{redirect:{to:'/newPage', statusCode:301}}
	},
	/*
	                                                                                                                            
	                                                     dddddddd                                                               
	                                                     d::::::d                  lllllll                                      
	                                                     d::::::d                  l:::::l                                      
	                                                     d::::::d                  l:::::l                                      
	                                                     d:::::d                   l:::::l                                      
	   mmmmmmm    mmmmmmm      ooooooooooo       ddddddddd:::::d uuuuuu    uuuuuu   l::::l     eeeeeeeeeeee        ssssssssss   
	 mm:::::::m  m:::::::mm  oo:::::::::::oo   dd::::::::::::::d u::::u    u::::u   l::::l   ee::::::::::::ee    ss::::::::::s  
	m::::::::::mm::::::::::mo:::::::::::::::o d::::::::::::::::d u::::u    u::::u   l::::l  e::::::eeeee:::::eess:::::::::::::s 
	m::::::::::::::::::::::mo:::::ooooo:::::od:::::::ddddd:::::d u::::u    u::::u   l::::l e::::::e     e:::::es::::::ssss:::::s
	m:::::mmm::::::mmm:::::mo::::o     o::::od::::::d    d:::::d u::::u    u::::u   l::::l e:::::::eeeee::::::e s:::::s  ssssss 
	m::::m   m::::m   m::::mo::::o     o::::od:::::d     d:::::d u::::u    u::::u   l::::l e:::::::::::::::::e    s::::::s      
	m::::m   m::::m   m::::mo::::o     o::::od:::::d     d:::::d u::::u    u::::u   l::::l e::::::eeeeeeeeeee        s::::::s   
	m::::m   m::::m   m::::mo::::o     o::::od:::::d     d:::::d u:::::uuuu:::::u   l::::l e:::::::e           ssssss   s:::::s 
	m::::m   m::::m   m::::mo:::::ooooo:::::od::::::ddddd::::::ddu:::::::::::::::uul::::::le::::::::e          s:::::ssss::::::s
	m::::m   m::::m   m::::mo:::::::::::::::o d:::::::::::::::::d u:::::::::::::::ul::::::l e::::::::eeeeeeee  s::::::::::::::s 
	m::::m   m::::m   m::::m oo:::::::::::oo   d:::::::::ddd::::d  uu::::::::uu:::ul::::::l  ee:::::::::::::e   s:::::::::::ss  
	mmmmmm   mmmmmm   mmmmmm   ooooooooooo      ddddddddd   ddddd    uuuuuuuu  uuuullllllll    eeeeeeeeeeeeee    sssssssssss    
	                                                                                                                            
	                                                                                                                            
	                                                                                                                            
	                                                                                                                            
	                                                                                                                            
	                                                                                                                            
	                                                                                                                            
	*/
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/sitemap',
		'nuxt-schema-org',
		'@pinia/nuxt',
		'nuxt-nodemailer',
		'@nuxtjs/robots',
		...(process.env.NUXT_PUBLIC_SITE_ENV=='dev' ? ['nuxt-proxy-request'] : [])
	],
	proxy:process.env.NUXT_PUBLIC_SITE_ENV=='dev' ? {
		options:[{
			pathFilter: ['/API/**'],
			target:process.env.NUXT_PUBLIC_API_PATH
		}]
	} : undefined,
	schemaOrg:{
		canonicalHost: process.env.NUXT_PUBLIC_ROOT_PATH,
		defaultLanguage: 'zh-TW'
	},
	googleFonts:{
		display:'swap',
		families:{
			'Noto+Sans+TC': '100..900',
			'Roboto':'100..900'
		}
	},
	tailwindcss: {
		cssPath:['~/assets/css/tailwind.css']
	},
	/* 
	sitemap參考
	https://clairechang.tw/2023/09/18/nuxt3/nuxt-v3-sitemap/#google_vignette
	*/
	site:{
		url:process.env.NUXT_PUBLIC_ROOT_PATH,
		name:'k-uno'
	},
	sitemap:{
		sources:['/sitemap-urls']
	},
	/* 
	設定用gmail寄信
	https://reurl.cc/g6QxV7
	*/
	nodemailer:{
		from:'',
		host:'smtp.gmail.com',
		port:465,
		secure:true,
		auth:{
			user:'juicystudio2018@gmail.com',
			pass:''
		}
	},
	/*
	                                                                                                            
	                                                                                                            
	                    lllllll                                         iiii                                    
	                    l:::::l                                        i::::i                                   
	                    l:::::l                                         iiii                                    
	                    l:::::l                                                                                 
	ppppp   ppppppppp    l::::l uuuuuu    uuuuuu     ggggggggg   gggggiiiiiiinnnn  nnnnnnnn        ssssssssss   
	p::::ppp:::::::::p   l::::l u::::u    u::::u    g:::::::::ggg::::gi:::::in:::nn::::::::nn    ss::::::::::s  
	p:::::::::::::::::p  l::::l u::::u    u::::u   g:::::::::::::::::g i::::in::::::::::::::nn ss:::::::::::::s 
	pp::::::ppppp::::::p l::::l u::::u    u::::u  g::::::ggggg::::::gg i::::inn:::::::::::::::ns::::::ssss:::::s
	 p:::::p     p:::::p l::::l u::::u    u::::u  g:::::g     g:::::g  i::::i  n:::::nnnn:::::n s:::::s  ssssss 
	 p:::::p     p:::::p l::::l u::::u    u::::u  g:::::g     g:::::g  i::::i  n::::n    n::::n   s::::::s      
	 p:::::p     p:::::p l::::l u::::u    u::::u  g:::::g     g:::::g  i::::i  n::::n    n::::n      s::::::s   
	 p:::::p    p::::::p l::::l u:::::uuuu:::::u  g::::::g    g:::::g  i::::i  n::::n    n::::nssssss   s:::::s 
	 p:::::ppppp:::::::pl::::::lu:::::::::::::::uug:::::::ggggg:::::g i::::::i n::::n    n::::ns:::::ssss::::::s
	 p::::::::::::::::p l::::::l u:::::::::::::::u g::::::::::::::::g i::::::i n::::n    n::::ns::::::::::::::s 
	 p::::::::::::::pp  l::::::l  uu::::::::uu:::u  gg::::::::::::::g i::::::i n::::n    n::::n s:::::::::::ss  
	 p::::::pppppppp    llllllll    uuuuuuuu  uuuu    gggggggg::::::g iiiiiiii nnnnnn    nnnnnn  sssssssssss    
	 p:::::p                                                  g:::::g                                           
	 p:::::p                                      gggggg      g:::::g                                           
	p:::::::p                                     g:::::gg   gg:::::g                                           
	p:::::::p                                      g::::::ggg:::::::g                                           
	p:::::::p                                       gg:::::::::::::g                                            
	ppppppppp                                         ggg::::::ggg                                              
	                                                     gggggg                                                 
	*/
	plugins:[
		// { src: '~/plugins/scrolltrigger.client.js', mode: 'client' },
	],
	compatibilityDate: '2025-04-14'
})

module.exports = {
    apps: [{
        name     : 'www.k-uno.com.tw',
		exec_mode: 'cluster',
		instances: '2',
		// cwd      : './current',
		script   : './.output/server/index.mjs',
		env:{
			'NUXT_API_SECRET'          : 'api_secret_token_prod',
			'NUXT_PUBLIC_ROOT_PATH'    : 'https://www.k-uno.com.tw',
			'NUXT_PUBLIC_API_PATH'     : 'https://api.k-uno.com.tw/API/',
			'NUXT_PUBLIC_GA_ID'        : 'GA-000000000-0',
			'NUXT_NODEMAILER_FROM'     : '"juicystudio" juicystudio2018@gmail.com',
			'NUXT_NODEMAILER_AUTH_PASS': 'bggylxlsoeenjzrf'
		}
    }]
};
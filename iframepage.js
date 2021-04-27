const server_origin = 'http://47.108.151.252';		   // 正式环境origin
const isProduction = location.origin == server_origin; // 是否是正式环境

const menus = [
	'数字资产',
	'协同设计',
	'智慧工地',
	'智慧运维',
];
const allpages = [
	{
		name: '首页',
		urlleft:'szzc/left.html',
		urlmiddle:'./map/index.html',
		leftwidth: '480px',
		rightwidth: '480px',
		urlright:'szzc/right.html',
		params: {
			left: {
				videoSrc: (isProduction ? './video/videoplayback (3).mp4' : (server_origin + '/szzc/video/videoplayback (3).mp4'))
			}
		}
	},
	{
		name: '开州至梁平高速公路',
		urlleft:'home/left.html',
		urlmiddle: (isProduction ? '' : server_origin)  + '/Viewer/',
		leftwidth: '365px',
		rightwidth: '500px',
		urlright:'home/right.html'
	}
]

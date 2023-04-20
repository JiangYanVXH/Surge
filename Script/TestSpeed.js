// 原作者@yibeizipeini来自于https://raw.githubusercontent.com/yibeizipeini/JavaScript/Surge/ConnectivityTest.js
let $ = {
Ｂ站:'https://www.bilibili.com',
百度:'https://www.baidu.com',
油管:'https://www.youtube.com/',
谷歌:'https://www.google.com/generate_204',
GPT:'https://www.openai.com',
Ｇ站:'https://www.github.com'}
!(async () => {
await Promise.all([http('Baidu'),http('Bilibili'),http('Github'),http('Google'),http('YouTub')]).then((x)=>{
	$done({
    title: 'TestSpeed',
    content: x.join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })})})();
function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
						'\xa0\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });});}

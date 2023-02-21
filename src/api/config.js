const httpUrl = window.location.host;
console.log(httpUrl)
export default {
    title:'admin',
    baseURL: {
        // 开发
        // dev: 'https://jm.jiankangche.cn/jmjk/',
        dev: httpUrl +'/',
        
        // 生产
        // pro: 'https://jm.jiankangche.cn/jmjk/',
        pro: httpUrl +'/',
    }
}

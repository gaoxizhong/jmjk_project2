const httpUrl = window.location.host;
console.log(httpUrl)
export default {
    title:'admin',
    baseURL: {
        // 开发
        // dev: 'https://jm.jiankangche.cn/jmjk/',
<<<<<<< Updated upstream
        dev: 'http://' + httpUrl +'/',
        
        // 生产
        // pro: 'https://jm.jiankangche.cn/jmjk/',
        pro: 'http://' + httpUrl +'/',
=======
        dev: 'http://' + httpUrl +'/jmjk/',
        
        // 生产
        // pro: 'https://jm.jiankangche.cn/jmjk/',
        pro: 'http://' + httpUrl +'/jmjk/',
>>>>>>> Stashed changes
    }
}

const httpUrl = window.location.host;
export default {
    title:'admin',
    baseURL: {
        // 开发
        // dev: 'https://jm.jiankangche.cn/jmjk/',
        dev: 'http://' + httpUrl +'/jmjk/',
        // 生产
        // pro: 'https://jm.jiankangche.cn/jmjk/',
        pro: 'http://' + httpUrl +'/jmjk/',
    }
}

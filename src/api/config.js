const httpUrl = window.location.host;
export default {
    title:'admin',
    baseURL: {
        // 开发
        // dev: 'http://106.225.184.197:8981/jmjk/',
        dev: 'http://' + httpUrl +'/jmjk/',
        // 生产
        // pro: 'http://106.225.184.197:8981/jmjk/',
        pro: 'http://' + httpUrl +'/jmjk/',
    }
}

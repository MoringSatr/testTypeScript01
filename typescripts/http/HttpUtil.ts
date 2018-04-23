import {HttpMethod} from "./HttpMethod";
import {escape} from "querystring";

export default class HttpUtil {

    //ajax封装

    /**
     *
     * @param {HttpMethod} method   http发送方式
     * @param {string} url          http地址
     * @param data                  发送数据
     * @param {Function} success    成功回调
     * @param {Function} failed     失败回调
     */
    public static ajax(method: HttpMethod, url: string, data: any, success: Function, failed: Function): void {
        // 创建ajax对象
        let xhr = new XMLHttpRequest();

        // 用于清除缓存
        let random = Math.random();

        if (typeof data == 'object') {
            let str = '';
            for (let key in data) {
                str += key + '=' + data[key] + '&';
            }
            //method=get&url=
            data = str.replace(/&$/, '');
        }

        if (method == HttpMethod.GET) {
            if (data) {
                xhr.open('GET', url + '?' + data, true);
            } else {
                xhr.open('GET', url + '?t=' + random, true);
            }
            xhr.send();

        } else if (method == HttpMethod.POST) {
            xhr.open('POST', url, true);
            // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }

        // 处理返回数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    success(xhr.responseText);
                } else {
                    if (failed) {
                        failed(xhr.status);
                    }
                }
            }
        }

    }

    //  调用
    //  ajax('get','check.php',sendData,function(data) {}

    /**
     *
     *  @param {object} opts
     *  参数说明：
     *  @opts: {'可选参数'}
     *  @method: 请求方式:GET/POST,默认值:'GET';
     *  @url:    发送请求的地址, 默认值: 当前页地址;
     *  @data: string,json;
     *  @async: 是否异步:true/false,默认值:true;
     *  @cache: 是否缓存：true/false,默认值:true;
     *  @cacheData:缓存数据
     *  @contentType: HTTP头信息，默认值：'application/x-www-form-urlencoded';
     *  @success: 请求成功后的回调函数;
     *  @error: 请求失败后的回调函数;
     */
    public static ajax2(opts: object): void {
        //一.设置默认参数
        var defaults = {
            method: 'GET',
            url: '',
            data: '',
            dataType: '',
            async: true,
            cache: true,
            cacheData: '',
            contentType: 'application/x-www-form-urlencoded',
            success: function () {
            },
            error: function () {
            }
        };

        //二.用户参数覆盖默认参数
        for (var key in opts) {
            defaults[key] = opts[key];
        }

        //三.对数据进行处理
        if (typeof defaults.data === 'object') {    //处理 data
            var str = '';
            var value = '';
            for (var key in defaults.data) {
                value = defaults.data[key];
                if (defaults.data[key].indexOf('&') !== -1) value = defaults.data[key].replace(/&/g, escape('&'));   //对参数中有&进行兼容处理
                if (key.indexOf('&') !== -1) key = key.replace(/&/g, escape('&'));   //对参数中有&进行兼容处理
                str += key + '=' + value + '&';
            }
            defaults.data = str.substring(0, str.length - 1);
        }

        defaults.method = defaults.method.toUpperCase();    //处理 method

        defaults.cacheData = defaults.cache ? '' : '&' + new Date().getTime();//处理 cache

        if (defaults.method === 'GET' && (defaults.data || defaults.cacheData)) defaults.url += '?' + defaults.data + defaults.cacheData;    //处理 url

        //四.开始编写ajax
        //1.创建ajax对象
        var oXhr = new XMLHttpRequest();
        //2.和服务器建立联系，告诉服务器你要取什么文件
        oXhr.open(defaults.method, defaults.url, defaults.async);
        //3.发送请求
        if (defaults.method === 'GET')
            oXhr.send(null);
        else {
            oXhr.setRequestHeader("Content-type", defaults.contentType);
            oXhr.send(defaults.data);
        }
        //4.等待服务器回应
        oXhr.onreadystatechange = function () {
            if (oXhr.readyState === 4) {
                if (oXhr.status === 200)
                    defaults.success.call(oXhr, oXhr.responseText);
                else {
                    defaults.error();
                }
            }
        };
    }

}
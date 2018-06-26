import {HttpMethod} from "./HttpMethod";

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


}
import {config} from "../config/config";
import {promisic} from "./util";
class Http {

    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            method,
            data,
            header: {
                appKey: config.appKey
            }
        })
        return res.data
    }
}

export {
    Http
}
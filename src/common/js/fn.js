import axios from 'axios'
import qs from 'qs'

function errCallback(obj, d) {
    obj.$message({
        message: d.data.info,
        type: 'warning'
    });
    obj.$router.replace('/login')
    return;
}

function ajax(obj, url, method, params, callback) {
    var paramsName = 'params';
    if (method.toUpperCase() == 'POST') {
        params = qs.stringify(params)
        paramsName = 'data'
    }
    axios({
        url: url,
        method: method,
        [paramsName]: params
    }).then(d => {

        if (d.data.code == -1) {
            errCallback(obj, d)
        }
        if (d.data.isok) {

            console.log(d)
            callback(d)
        } else {
            this.$message({
                message: d.data.info,
                type: 'warning'
            })
        }

    })
}
export default {
    errCallback,
    ajax
}
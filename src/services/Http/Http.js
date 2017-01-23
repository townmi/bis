/**
 * Created by townmi on 17/1/14.
 */
import React from 'react';

class Http {
    constructor () {
        this.XHR = new XMLHttpRequest();

        this.options = {
            "method": null,
            "url": null,
            "aysnc": true,
            "timeout": 5000,
            "success": null,
            "data": null,
            "error": null
        }
    }

    ajax (options) {

        var copy = Object.assign(this.options, options);

        this.XHR.timeout = copy.timeout;

        this.XHR.open(copy.method, copy.url, copy.aysnc);

        this.XHR.setRequestHeader("Content-Type", "application/json");

        this.XHR.onload = function () {
            if (this.status == 200 || this.status == 304) {
                copy.success(JSON.parse(this.responseText));
            }
        };

        this.XHR.ontimeout = function () {
            console.log("Time Out");
        };
        this.XHR.onerror = function () {
        };

        this.XHR.send(JSON.stringify(copy.data));
    }
}

// Http.propTypes = {
//     url: React.PropTypes.string
// };

export default Http
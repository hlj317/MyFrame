'use strict';

let pareUrl = (url) => {
    let dom = document.createElement('a');
    dom.href = url;

    let keys = [
        'protocol',
        'host',
        'hostname',
        'origin',
        'username',
        'password',
        'pathname',
        'port',
        'search',
        'hash',
    ];
    let urlObj = {
        params: {},
    };
    keys.forEach((key) => {
        urlObj[key] = dom[key];
    });

    let search = urlObj.search;
    if (search) {
        let kvArr = search.substring(1).split('&');
        let params = {};
        kvArr.forEach((kvStr) => {
            let pair = kvStr.split('=');
            if (pair[0]) {
                let key = pair.shift();
                let value = pair.join('=') || '';
                try {
                    params[decodeURIComponent(key)] = decodeURIComponent(value);
                } catch (e) {
                    params[key] = value;
                }
            }
        });
        urlObj.params = params;
    }

    return urlObj;
};

export let format = (urlObj) => {
    let {
        protocol,
        username,
        password,
        host,
        pathname,
        search,
        params,
        hash,
    } = urlObj;
    if (!search && params) {
        let kvs = Object.keys(params).map((key) => {
            let val = encodeURIComponent(params[key]);
            return `${key}=${val}`;
        });

        search = `?${kvs.join('&')}`;
    }

    let urlCmps = [
        protocol,
        '//',
        username ? `${username}:${password}@` : '',
        host,
        pathname,
        search,
        hash,
    ];

    return urlCmps.join('');
};

export let parse = (url) => {
    if (!url) {
        let inBrowser = typeof window !== 'undefined';
        if (!inBrowser) {
            console.error('Param of url is need.');
            return null;
        }
        url = window.location.href;
    }

    return pareUrl(url);
};

export default {
    parse,
    format,
};

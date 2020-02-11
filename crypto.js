// Generate your own keys:
// openssl genrsa -out private.pem 4096
// openssl rsa -in private.pem -pubout -out public.pem -outform PEM
const publicPEM = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmW8RVmhY9ZddJzk4lZCx
GQo1B+R1QTfFs7ZhksTenw8hpI8XYmKrDqtFKnCEkm+ptKO8v38rtSNv2DAQQuUc
SP5k4bGWScfRWY1Tl92rD7pI6u3s9wH5qMEVp3Oa0SpY8M1CP4BMBEecNHuxO4Gw
0U85+AxkPvOadZP1VDzp1hR6fiKR6bH/N65UKOabkjx7btqYpAGP5XMtbXqqpA3n
2lxoCS1jbs+CZCNrQryM1r8jZdwvKKxQwjtOSzwxKTpcQ0B7hl06IUYuyQFSZqNJ
sILqQurTUcDfDbO72MyLRBJe3VStXyD4Xg7rR4tlutk0m6MxKSz9lldR/cVe7SEf
8HO2lavMbe2RwGS0RdBNV+3TejJCXaXqyQgaLNJXw1lD3TrQ31QGrCiXXtFE3my8
YsprFuXOAv3zJslSNzDlZH4iSee3dixkA8H8wjUFYh/Fa0r0wYsPmKs/1s9xKj4K
k+noa/NSYSJkMMJCqb8yDVsS4oherWyaVv67vhK0hPxB5ZnrgEOt2DXhcQf2eY5f
X/i4AU8bZQmdZP3quHWSjL+r2MfX3WLNB3PXfcjI1bP6QrY5eiXOhQNDQZVDDr+d
So+ziayOiB71f15+xpQHnMSrg/V8ISYeddYFFTLxan89mc76nHl44LcqbAlqSv4W
P9NV96ZAtHRcHxvJxWzXvcsCAwEAAQ==
-----END PUBLIC KEY-----`;
// NOTE: The private key is a PKCS#8 encoded key obtained with:
// openssl pkcs8 -inform PEM -outform PEM -in private.pem -out private-pkcs8.pem -nocrypt -topk8
const privatePEM = `-----BEGIN PRIVATE KEY-----
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
2zxltGWpiPzkbQ0AMRTArYDrv05RmA==
-----END PRIVATE KEY-----`;

// from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
function binaryStringToArrayBuffer(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i += 1) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function arrayBufferToBase64(buffer) {
    const bufView = new Uint8Array(buffer);
    let inputString = '';
    for (let i = 0, byteLength = bufView.byteLength; i < byteLength; i += 1) {
        inputString += String.fromCharCode(bufView[i]);
    }
    return window.btoa(inputString);
}

const PEMPatternsByType = {
    public: {
        header: /-+BEGIN PUBLIC KEY-+/,
        footer: /-+END PUBLIC KEY-+/
    },
    private: {
        header: /-+BEGIN PRIVATE KEY-+/,
        footer: /-+END PRIVATE KEY-+/
    }
};

function extractDER(pem, type) {
    if (typeof pem !== 'string') {
        throw new TypeError('The pem argument must be a string');
    }
    // fetch the part of the PEM string between header and footer
    if (!PEMPatternsByType[type]) {
        throw new Error('Unknown key type: ' + type + ' - supported key types: ' + Object.keys(PEMPatternsByType).join(', '));
    }
    const { header: headerPattern, footer: footerPattern } = PEMPatternsByType[type];
    const headerMatch = pem.match(headerPattern);
    const footerMatch = pem.match(footerPattern);
    if (!headerMatch || !footerMatch) {
        throw new Error('No header/footer found in PEM');
    }
    const pemContents = pem.slice(headerMatch.index + headerMatch[0].length, footerMatch.index);
    // base64 decode the string to get the binary data
    const binaryDerString = window.atob(pemContents);
    // convert from a binary string to an ArrayBuffer
    return binaryStringToArrayBuffer(binaryDerString);
}

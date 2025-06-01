class Metalink {
    constructor (...args) {
        let encoder = new TextEncoder();
        let result = this.#make(args).join('\n');
        this.text = `<?xml version="1.0" encoding="UTF-8"?>\n<metalink version="4.0" xmlns="urn:ietf:params:xml:ns:metalink">\n${result}\n</metalink>`;
        this.arrayBuffer = encoder.encode(this.text);
        this.dataURL = 'data:text/plain;base64,' + btoa(unescape(encodeURIComponent(this.text)));
        this.blob = new Blob([this.text], {type: 'application/metalink+xml; charset=utf-8'});
    }
    version = '0.3';
    #make (args) {
        return args.flat().map(({name, size, version, language, hash, url, metaurl}) => {
            let uris = Array.isArray(url) ? url : [url];
            if (!name) {
                let uri = uris[0];
                uri = typeof uri === 'object' ? uri.url : typeof uri === 'string' ? uri : null;
                name = uri?.match(/\/([^/?#]+)(?:\?.*)?$/)?.[1] ?? this.#filename();
            }
            let result = `    <file name="${name}">`;
            if (Number.isInteger(size) && size > 0) {
                result += `\n        <size>${size}</size>`;
            }
            if (/^(\d+\.)*\d+-?(\w+)?$/.test(version)) {
                result += `\n        <version>${version}</version>`;
            }
            if (language) {
                result += `\n        <language>${language}</language>`;
            }
            hash?.forEach(({type, hash}) => {
                result += `\n        <hash type="${type}">${hash}</hash>`;
            });
            uris.forEach((arg) => {
                result += typeof arg === 'object' ? `\n        <url location="${arg.location}">${arg.url}</url>` : typeof arg === 'string' ? `\n        <url>${arg}</url>` : '';
            });
            metaurl?.forEach(({type, url}) => {
                result += `\n        <metaurl metatype="${type}">${url}</metaurl>`;
            });
            return `${result}\n    </file>`;
        });
    }
    #filename () {
        let date = new Date();
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let day = String(date.getDate()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let seconds = String(date.getSeconds()).padStart(2, '0');
        return `metalink_${year}${month}${day}_${hours}${minutes}${seconds}`;
    }
    save (filename ) {
        let url = URL.createObjectURL(this.blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `${(filename?.trim() || this.#filename())}.meta4`;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
}

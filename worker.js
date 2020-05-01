console.log("worker: created")

self.onmessage = (_msg) => {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'index.html', true);
    xhr.onloadstart = () => { console.log("worker: request begin"); };
    xhr.onload = () => { console.log("worker: request end"); };

    xhr.send(null);
}

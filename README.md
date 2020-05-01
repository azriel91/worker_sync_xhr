# Worker Sync XHR

Proof that even if an XHR is sent in a Web Worker (synchronously), it never gets sent while the main thread is blocked.

Online at: <https://azriel.im/worker_sync_xhr/>

Output:

```js
21:45:04.769 main: creating worker
21:45:04.828 worker: created
21:45:06.498 ---
21:45:06.504 main (sync): sending message to worker
21:45:06.505 main (sync): wait begin
21:45:08.045 main (sync): wait end
21:45:08.047 worker: request begin
21:45:08.054 worker: request end
21:45:11.884 ---
21:45:11.888 main (async): sending message to worker
21:45:11.889 main (async): wait begin
21:45:11.896 worker: request begin
21:45:11.968 worker: request end
21:45:12.891 main (async): wait end
```

<details>
<summary>Logic</summary>

`main`:

1. Start `worker`.
2. Log begin.
3. Wait 1.5 seconds.
4. Log end.

`worker`:

1. Log begin.
2. Send XHR synchronously.
3. Log end.

</details>

## Running Locally

1. Start a HTTP server in the repository directory:

    ```bash
    python -m SimpleHTTPServer 8000
    ```

2. Open <http://localhost:8000/>.
3. Look at the console log.
4. Edit `index.html`.
5. Refresh the page.

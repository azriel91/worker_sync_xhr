# Worker Sync XHR

Proof that even if an XHR is sent in a Web Worker (synchronously), it never gets sent while the main thread is blocked.

Online at: <https://azriel.im/worker_sync_xhr/>

Output:

* synchronous `main` thread:

    ```js
    21:02:40.205 main: wait begin
    21:02:41.693 main: wait end
    21:02:41.722 worker: request begin
    21:02:41.733 worker: request end
    ```

* asynchronous `main` thread:

    ```js
    21:03:40.371 main: wait begin
    21:03:40.402 worker: request begin
    21:03:40.412 worker: request end
    21:03:41.375 main: wait end
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

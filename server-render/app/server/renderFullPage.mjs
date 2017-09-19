export default function renderFullPage(html, preloadedState, scriptUrl) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Server render</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script type="text/javascript" src="/static/${scriptUrl}"></script>
            </body>
        </html>
    `;
};

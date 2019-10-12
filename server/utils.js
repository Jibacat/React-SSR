import React from 'react'
import Routes from './routes'
import { renderToString } from 'react-dom/server';
// 重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom'; 

export const render = (req) => {
    // 构建服务端的路由
    const content = renderToString(
        <StaticRouter location={req.path} >
            {Routes}
        </StaticRouter>
    );
    return `
        <html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/app.js"></script>
            <script src="/vendor.js"></script>
        </body>
        </html>
    `
}
const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://admin.local.mywebsite.com",
        secure: false,
        pathRewrite: {
            "^/api": "http://admin.local.mywebsite.com/api"
        },
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;
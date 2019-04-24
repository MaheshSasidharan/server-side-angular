const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://admin.local.idicore.com",
        secure: false,
        pathRewrite: {
            "^/api": "http://admin.local.idicore.com/api"
        },
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;
const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:4000",
        secure: false,
        pathRewrite: {
            "^/api": "http://localhost:4000/api"
        },
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;
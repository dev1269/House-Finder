const PROXY_CONFIG = {
    "/api/*": {
        target: true,
        router: function (req) {
            var target = 'https://demo.interfacema.de/programming-assessment-1.0/buildings'; // or some custom code
            return target;
        },
        changeOrigin: true,
        secure: false
    }
};

module.exports = PROXY_CONFIG;
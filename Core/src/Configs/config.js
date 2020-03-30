const env = process.env.NODE_ENV || "dev"; // 'dev' or 'Production'

const dev = {

    server : {
        host : process.env.HOST || "127.0.0.1",
        port : process.env.PORT || "3300"
        }
};

const production = {

    server : {
        host : process.env.HOST || "127.0.0.1",
        port : process.env.PORT || "5000"
    }
};

const config = {
    dev, production
};

module.exports = config[env];
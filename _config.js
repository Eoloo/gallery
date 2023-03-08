var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb://eoloo:Nairobi254@ac-v7zqbdy-shard-00-00.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-01.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-02.ha1qbwy.mongodb.net:27017/?ssl=true&replicaSet=atlas-wduxz7-shard-0&authSource=admin&retryWrites=true&w=majority',
    development: 'mongodb://eoloo:Nairobi254@ac-v7zqbdy-shard-00-00.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-01.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-02.ha1qbwy.mongodb.net:27017/?ssl=true&replicaSet=atlas-wduxz7-shard-0&authSource=admin&retryWrites=true&w=majority',
    test: 'mongodb://eoloo:Nairobi254@ac-v7zqbdy-shard-00-00.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-01.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-02.ha1qbwy.mongodb.net:27017/?ssl=true&replicaSet=atlas-wduxz7-shard-0&authSource=admin&retryWrites=true&w=majority',
}
module.exports = config;

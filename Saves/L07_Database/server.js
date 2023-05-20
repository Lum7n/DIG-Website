"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeWork4U_5 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var WeWork4U_5;
(function (WeWork4U_5) {
    let tasks;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    let databaseURL = "mongodb+srv://Lum7n:DatabaseLum7n@eia2-xvgmg.mongodb.net/WeWork4U?retryWrites=true&w=majority";
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //da vom Typ Promise = await und async
        tasks = mongoClient.db("WeWork4U").collection("Tasks");
        console.log("Database connection ", tasks != undefined);
    }
    let allTasks = [];
    async function handleRequest(_request, _response) {
        console.log("what's up?");
        // wird ausgegeben wenn im Browser "localhost:5001" eingegeben wird
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // "parse" verändert das Format der Information
            // durch "true" wird es zu einem assoziativen Array
            console.log(url.query);
            // for (let key in url.query) {
            //     console.log(key + " : " + url.query[key]);
            //     _response.write(key + " : " + url.query[key] + "<br/>");
            // }
            if (_request.url == "/?getTasks=yes") {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(databaseURL, options);
                await mongoClient.connect();
                let tasks = mongoClient.db("WeWork4U").collection("Tasks");
                let mongoCursor = tasks.find();
                await mongoCursor.forEach(retrieveOrders);
                let jsonString = JSON.stringify(allTasks);
                let answer = jsonString.toString();
                _response.write(answer);
                allTasks = [];
            }
            else {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeTask(url.query);
            }
        }
        _response.end();
    }
    function storeTask(_task) {
        tasks.insert(_task);
    }
    function retrieveOrders(_item) {
        let jsonString = JSON.stringify(_item);
        allTasks.push(jsonString);
    }
})(WeWork4U_5 = exports.WeWork4U_5 || (exports.WeWork4U_5 = {}));
//# sourceMappingURL=server.js.map
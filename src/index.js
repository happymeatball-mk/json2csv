import { json2csv, Archiver } from "./json2csv.js";

const filter = [];               //data filter 
const algorithm = "gzip";        //archive algoritm: "gzip", "deflate" or "brotli"

const j2c = new json2csv("./src/comments.json");
const arch = new Archiver(algorithm);

j2c.save("./data.csv", filter);

//arch.compress("./data.csv", "./data.csv.gz");
//arch.decompress("./data.csv.gz", "./restored.csv");
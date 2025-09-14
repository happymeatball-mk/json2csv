import { Json2csv, Archiver } from "./json2csv.js";

const filter = [];               //columns filter 
const algorithm = "gzip";        //archive algoritm: "gzip", "deflate" or "brotli"

const j2c = new Json2csv("./src/comments.json");
const arch = new Archiver(algorithm);

j2c.save("./data.csv", filter);
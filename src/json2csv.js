import fs from 'node:fs'
import zlib from 'node:zlib'

export class Json2csv {

constructor(path) {
  this.path = path;
}

#convert(columnsWhtLst) {
  const jsonData = JSON.parse(fs.readFileSync(this.path, 'utf8'));
  let headers = (!columnsWhtLst) ? Object.keys(jsonData[0]) : columnsWhtLst;
  let csvRows = [];

  csvRows.push(headers.join(","));

  for (const row of jsonData) {
    let values = headers.map(header => JSON.stringify(row[header]));
    csvRows.push(values.join(","));
  }

return csvRows.join("\n"); 
}

save(path, filter) {
  fs.writeFileSync(path, this.#convert(filter))
}
}

export class Archiver {
  constructor (algorithm) {
    this.algorithm = algorithm;
  }

  #algType(type = "compress") {
    switch (this.algorithm) {
      case "gzip": 
        return type === "compress" ? zlib.createGzip() : zlib.createGunzip();
      case "deflate":
        return type === "compress" ? zlib.createDeflate() : zlib.createInflate();
      case "brotli": 
        return type === "compress" ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();
      default:
        throw new Error(`Unsupported algorithm`);  
    }
  }
  
  compress (inPath, outPath) {
    const fileData = fs.createReadStream(inPath);
    const write = fs.createWriteStream(outPath);
    const comp = this.#algType("compress"); 
    
    fileData.pipe(comp).pipe(write);
  }

  decompress (inPath, outPath) {
    const archData = fs.createReadStream(inPath);
    const write = fs.createWriteStream(outPath);
    const decomp = this.#algType("decompress");

    archData.pipe(decomp).pipe(write);
  }
}
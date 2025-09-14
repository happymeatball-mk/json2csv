## Description

A simple application for converting json to csv, with the ability to archive csv files.

j2c.save("./data.csv", filter)                          - convert json to csv ("filter" - needed columns);
arch.compress("./data.csv", "./data.csv.gz")            - archive csv file; 
arch.decompress("./data.csv.gz", "./restored.csv")      - unarchive csv file;

## Quickstart

Install node.js - https://nodejs.org/en

Clone the repository and run the script using Node.js.

git clone https://github.com/happymeatball-mk/json2csv.git
cd \the-path-to-your-repository\json2csv 
node index.js
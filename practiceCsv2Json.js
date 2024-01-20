import fs from "fs";
import { arrToObjectData } from "./lib.js";
import { filtered } from "./test.js";

const limeDataReadStream = fs.createReadStream(`${process.cwd()}/p_2.csv`);

let rawData = ``;

// Reading file
limeDataReadStream.on("data", (data) => {
  rawData += data;
});

//we can use the read data
limeDataReadStream.on("end", () => {
  // console.log(rawData);
  // Split the data
  let arrayData = rawData.split(`\n`);

  // ---------------------------
  // Now seperate the Head and body
  const [stringHeadData, ...arrayBodyData] = arrayData;

  //   console.log(arrayBodyData);

  let arrayHeadData = stringHeadData.split(";");

  let updatedArray = arrayHeadData.map((str) => str.replace(/"/g, ""));

  const bodyData = arrayBodyData.map((body) => body.split(";"));

  // create a lib.js

  // Create empty array to put all our data Object
  const limeData = [];

  /*

    Loop through the BODY array and pass 
    the array at each index to our arrToObjectData
    method then push itback to our limeData empty
    array variable
    */
  for (let i = 0; i < bodyData.length; i++) {
    limeData.push(arrToObjectData(updatedArray, bodyData[i]));
  }
  // const obj = limeData;

  let datas = JSON.stringify(limeData);
  console.log(limeData.length);
  // filtered(6, limeData);
  // console.log(datas);

  // Save the Lime data to a json file
  return;

  fs.writeFile(
    `${process.cwd()}/lime_data/limedatas.json`,
    JSON.stringify(limeData),
    (err) => {
      if (err) return console.log(err);
      console.log("Data converted successfully");
    }
  );
});

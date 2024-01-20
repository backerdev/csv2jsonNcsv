import { limeDataReadStream, rawData } from "./practiceCsv2Json";

//we can use the read data
limeDataReadStream.on("end", () => {
  // console.log(rawData);
  // Split the data
  const arrayData = rawData.split("\n");
  //   console.log(arrayData);
});

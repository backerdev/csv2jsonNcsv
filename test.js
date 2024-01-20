import { appendFileSync } from "fs";
// import { datas } from "./testData.js";

let tes = [];
export function filtered(choice, datas) {
  // let keysWithValueNot100 = [
  //     // Your data here
  //   ];
  // console.log(datas);
  // Separate Lime pump instances with values not equal to 100

  let phTime = "";
  let ph = "";
  let valve = "";
  let position = "";
  let flow = "";
  let fit = "";
  let time = "";
  let i = false;
  let j = 0;
  // let flowIdx = "";
  var regex = /\d+/g;

  let limePumpNot100 = datas
    .map((obj, count) => {
      let limePumpPairs = Object.entries(obj).filter(([key, value]) => {
        if (
          key.includes(`${choice} Motorized Valve ValueY`) &&
          Number(value) < 100 &&
          Number(value) > 5
        ) {
          // flowIdx = key.match(regex)[0];

          valve = key;
          position = value;
        }
        if (key.includes("pH Meter 1 Time")) {
          // console.log(i++);

          phTime = value;
        }

        if (key.includes("pH Meter 1 ValueY")) {
          ph = value;
        }
        // if (key.includes(` ${flowIdx} flowmeter Time`)) {
        // if (key.includes(` ${choice} flowmeter Time`)) {
        //   time = value;
        // }
        //  2 flowmeter ValueY

        if (key.includes(` ${choice} flowmeter ValueY`) && Number(value) > 3) {
          fit = key;
          flow = value;
        }

        return;
      });
      if (!fit || !flow) return;

      tes.push({
        id: tes.length + 1,
        phTime: phTime,
        ph: Number(ph).toFixed(3),
        valve,
        position: Number(position).toFixed(3),
        fit,
        flow: Number(flow).toFixed(3),
      });

      return limePumpPairs.length > 0 ? limePumpPairs : null;
    })
    .filter(Boolean);

  try {
    tes.forEach((data) => {
      const { id, phTime, ph, valve, position, fit, flow } = data;
      const date = phTime.split(" ")[0];
      const phT = phTime.split(" ")[1];
      // console.log(valve);
      // console.log(position);
      // const csv2 = `${id},${ph},${time},${valve},${fit},${flow}\n`;
      // const csv2 = `no: ${id},ph_time: ${phTime},ph: ${ph},valve: ${valve},vl_time: ${time},vl_pos: ${position},fit_name: ${fit},flow_value: ${flow}\n`;
      const csv2 = `${id},${date},${phT},${ph},${valve},${time}, ${position},${fit},${flow}\n`;
      appendFileSync(`${process.cwd()}/csv/limePump${choice}Datas.csv`, csv2);

      // appendFileSync("./1limeDatas.csv", csv2);
      // limeDatas({
      //   no: id,
      //   ph_time: phTime,
      //   ph_value: ph,
      //   valve_time: time,
      //   valve_name: valve,
      //   valve_pos: position,
      //   fit_flow: fit,
      //   flow_value: flow,
      // });
    });
    tes = [];
    console.log("created");
  } catch (error) {
    console.log(error);
  }

  // limeDatas({
  //   ph_time: phTime,
  //   ph: ph,
  //   valve_time: time,
  //   valve_name: valve,
  //   valve_pos: position,
  //   fit: fit,
  //   flow: flow,
  // });

  return;
}

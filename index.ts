import { day1, day1Part2 } from "./days/1/code";
import { day2, day2Part2 } from "./days/2/code";
import { day3, day3Part2 } from "./days/3/code";


const startTime = performance.now();

console.log(day3Part2());

const endTime = performance.now();
console.log(`Execution time: ${endTime - startTime} milliseconds`);
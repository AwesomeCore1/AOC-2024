import { readFileSync } from 'fs';
import { join } from 'path';

const input = readFileSync(join(__dirname, 'input.txt'), 'utf-8');
const lines: string[] = input.split('\n');

export function day3(): number {
  const re = new RegExp('mul\\(d+,d+\\)', 'gm');
  let instructions = input.match(re);

  let output: number = 0;

  for (let i = 0; instructions && i < instructions.length; i++) {
    const element = instructions[i];

    let values = element.match(new RegExp('d+', 'gm'));
    if (values) {
      output += parseInt(values[0]) * parseInt(values[1]);
    }
  }

  return output;
}

export function day3Part2(): number {
  const re = new RegExp('mul\\(\\d+,\\d+\\)|do\\(\\)|don\'t\\(\\)', 'gm');
  let instructions = input.match(re);

  let output: number = 0;
  let enabled: boolean = true;

  for (let i = 0; instructions && i < instructions.length; i++) {
    const element = instructions[i];
  
    if (element === "do()") {
      enabled = true;
      continue;
    } else if (element === "don't()") {
      enabled = false;
      continue;
    }
    if (enabled) {
      let values = element.match(new RegExp('[0-9]+', 'gm'));
      if (values) {
        output += parseInt(values[0]) * parseInt(values[1]);
      }
    }
  }

  return output;
}
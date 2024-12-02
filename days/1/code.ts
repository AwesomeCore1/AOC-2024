import { readFileSync } from 'fs';
import { join } from 'path';

const input = readFileSync(join(__dirname, 'input.txt'), 'utf-8');
const lines = input.split('\n');

export function day1(): number {
  let n1: number[] = [];
  let n2: number[] = [];

  let diff: number = 0;

  for (let i = 0; i < lines.length; i++) {
    let nums = lines[i].split('   ');
    n1.push(parseInt(nums[0]));
    n2.push(parseInt(nums[1]));
  }

  n1.sort((a, b) => a - b);
  n2.sort((a, b) => a - b);

  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
      diff += Math.abs(n1[i] - n2[i]);
    }
  }

  return diff;
}

export function day1Part2(): number {
  let n1: number[] = [];
  let n2: number[] = [];
  let n3: Map<number, number> = new Map();

  let diff: number = 0;

  for (let i = 0; i < lines.length; i++) {
    let nums = lines[i].split('   ');
    n1.push(parseInt(nums[0]));
    n2.push(parseInt(nums[1]));
  }

  n1.sort((a, b) => a - b);
  n2.sort((a, b) => a - b);

  for (let i = 0; i < n2.length; i++) {
    let val = n3.get(n2[i]);
    n3.set(n2[i], (val ?? 0) + 1);
  }

  for (let i = 0; i < n1.length; i++) {
    let val = n3.get(n1[i]);
    if (val !== undefined) {
      diff += (n1[i] * val);
    }
  }

  return diff;
}
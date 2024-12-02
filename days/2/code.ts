import { readFileSync } from 'fs';
import { join } from 'path';

const input = readFileSync(join(__dirname, 'input.txt'), 'utf-8');
const lines: string[] = input.split('\n');

export function day2(): number {
  let safeReports: number = 0;

  for (let i = 0; i < lines.length; i++) {
    const rep_full: string = lines[i];
    let reports: string[] = rep_full.split(' ');

    let isAscending: boolean = false;
    let isDescending: boolean = false;
    let isValid: boolean = true;

    for (let i = 1; i < reports.length; i++) {
      const currentReport = parseInt(reports[i]);
      const previousReport = parseInt(reports[i - 1]);
      const difference = Math.abs(currentReport - previousReport);

      if (difference < 1 || difference > 3) {
        isValid = false;
        break;
      }

      if (currentReport > previousReport) {
        if (isDescending) {
          isValid = false;
          break;
        }
        isAscending = true;
      } else if (currentReport < previousReport) {
        if (isAscending) {
          isValid = false;
          break;
        }
        isDescending = true;
      }
    }

    if (isValid && (isAscending || isDescending)) {
      safeReports++;
    }
  }

  return safeReports;
}

export function day2Part2(): number {
  let safeReports: number = 0;

  for (let i = 0; i < lines.length; i++) {
    const rep_full: string = lines[i];
    let reports: string[] = rep_full.split(' ');

    let isAscending: boolean = false;
    let isDescending: boolean = false;
    let isValid: boolean = true;

    for (let j = 1; j < reports.length; j++) {
      const currentReport = parseInt(reports[j]);
      const previousReport = parseInt(reports[j - 1]);
      const difference = Math.abs(currentReport - previousReport);

      if (difference < 1 || difference > 3) {
        isValid = false;
        break;
      }

      if (currentReport > previousReport) {
        if (isDescending) {
          isValid = false;
          break;
        }
        isAscending = true;
      } else if (currentReport < previousReport) {
        if (isAscending) {
          isValid = false;
          break;
        }
        isDescending = true;
      }
    }

    if (isValid && (isAscending || isDescending)) {
      safeReports++;
    } else {
      for (let j = 0; j < reports.length; j++) {
        let modifiedReports = reports.slice(0, j).concat(reports.slice(j + 1));
        let isModifiedValid: boolean = true;
        let isModifiedAscending: boolean = false;
        let isModifiedDescending: boolean = false;

        for (let k = 1; k < modifiedReports.length; k++) {
          const currentReport = parseInt(modifiedReports[k]);
          const previousReport = parseInt(modifiedReports[k - 1]);
          const difference = Math.abs(currentReport - previousReport);

          if (difference < 1 || difference > 3) {
            isModifiedValid = false;
            break;
          }

          if (currentReport > previousReport) {
            if (isModifiedDescending) {
              isModifiedValid = false;
              break;
            }
            isModifiedAscending = true;
          } else if (currentReport < previousReport) {
            if (isModifiedAscending) {
              isModifiedValid = false;
              break;
            }
            isModifiedDescending = true;
          }
        }

        if (isModifiedValid && (isModifiedAscending || isModifiedDescending)) {
          safeReports++;
          break;
        }
      }
    }
  }

  return safeReports;
}

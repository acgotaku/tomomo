function getDayCountOfMonth(year: number, month: number): number {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
}

function getFirstDayOfMonth(date: Date): number {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
}

function prevMonth(year: number, month: number): Date {
  return month === 0 ? new Date(year - 1, 11, 1) : new Date(year, month - 1, 1);
}

function nextMonth(year: number, month: number): Date {
  return month === 11 ? new Date(year + 1, 0, 1) : new Date(year, month + 1, 1);
}

function strDate(date: Date | null) {
  if (date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  } else {
    return '';
  }
}

function formatDate(date: Date | null | Array<Date | null>): string {
  if (Array.isArray(date)) {
    if (date[0] && date[1]) {
      return date.map(d => strDate(d)).join(' - ');
    } else {
      return '';
    }
  } else {
    return strDate(date);
  }
}

function isToday(year: number, month: number, date: number): boolean {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day = new Date(year, month, date);
  return today.getTime() === day.getTime();
}

function isStart(
  year: number,
  month: number,
  date: number,
  startDate: Date
): boolean {
  const day = new Date(year, month, date);
  return startDate.getTime() === day.getTime();
}

function isEnd(
  year: number,
  month: number,
  date: number,
  endDate: Date
): boolean {
  const day = new Date(year, month, date);
  return endDate.getTime() === day.getTime();
}

function inRange(
  year: number,
  month: number,
  date: number,
  startDate: Date,
  endDate: Date
): boolean {
  const day = new Date(year, month, date);
  return (
    day.getTime() <= endDate.getTime() && day.getTime() >= startDate.getTime()
  );
}

function parseDate(date: string): Date {
  const [year, month, day] = date.split('-');
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export default {
  getDayCountOfMonth,
  getFirstDayOfMonth,
  prevMonth,
  nextMonth,
  formatDate,
  parseDate,
  isToday,
  isStart,
  isEnd,
  inRange
};

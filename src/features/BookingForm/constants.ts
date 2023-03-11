export const MIN_GUEST = 1;
export const MAX_GUEST = 4;
export const MIN_NIGHT_COUNT = 1;
export const MAX_NIGHT_COUNT = 14;

export const DAY_IN_MS = 1000 * 3600 * 24;
const MONTH_IN_MS = DAY_IN_MS * 30;

export const MAX_BOOKING_PERIOD = MONTH_IN_MS * 6;
export const MAX_BOOKING_DURATION = MAX_NIGHT_COUNT * DAY_IN_MS;
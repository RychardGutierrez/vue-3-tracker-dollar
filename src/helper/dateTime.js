import dayjs from 'dayjs';

export const getTrackerDate = (date) =>
  new Date().toLocaleDateString('en-us', {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
  });

export const getTrackerTime = (time) =>
  new Date().toLocaleTimeString('en-us', {
    timeStyle: 'short',
  });

export const getTrackerWeek = () => ({
  startDate: dayjs().subtract(6, 'day').format('YYYY-MM-DD'),
  endDate: dayjs().format('YYYY-MM-DD'),
});

export const dateWeekDay = (date) => dayjs(date).format('dddd');

export const currentDate = () => dayjs().format('MMM D, YYYY');

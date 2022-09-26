import { CONVERTER_DOLLAR, TRACKER_DOLLAR } from '../data/trackerMock';

const PATH = 'https://api.apilayer.com/currency_data/convert';

const PATH_CURRENCY = 'https://api.apilayer.com/currency_data/timeframe?';

const myHeaders = new Headers();
myHeaders.append('apikey', import.meta.env.VITE_EXCHANGE_API_KEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const getConvertDollar = async (symbols, amount = 1) => {
  if (import.meta.env.VITE_MODE === 'MOCK') {
    return CONVERTER_DOLLAR;
  }

  const result = await fetch(
    `${PATH}?to=${symbols}&from=USD&amount=${amount}`,
    requestOptions
  );

  const data = await result.json();

  if (data.success) {
    return data;
  }

  if (result.status === 404) {
    return {
      error: true,
      message: 'Not found Country',
    };
  }

  return {
    error: true,
    message: 'Error Server',
  };
};

export const getTrackerDollar = async ({ symbol, startDate, endDate }) => {
  if (import.meta.env.VITE_MODE === 'MOCK') {
    return TRACKER_DOLLAR;
  }

  const result = await fetch(
    `${PATH_CURRENCY}start_date=${startDate}&end_date=${endDate}&source=USD&currencies=${symbol}`,
    requestOptions
  );

  const data = await result.json();
  if (data.success) {
    return data;
  }

  if (result.status === 404) {
    return {
      error: true,
      message: 'Not found Country',
    };
  }

  return {
    error: true,
    message: 'Error Server',
  };
};

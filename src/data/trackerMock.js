// https://api.exchangeratesapi.io/v1/timeseries? access_key = API_KEY& start_date = 2012-05-01& end_date = 2012-05-25
export const TRACKER_HISTORY = {
  success: true,
  timeseries: true,
  start_date: '2012-05-01',
  end_date: '2012-05-03',
  base: 'USD',
  rates: {
    '2022-09-01': {
      BOL: 6.9,
    },
    '2022-09-02': {
      BOL: 6.92,
    },
    '2022-09-03': {
      BOL: 6.98,
    },
  },
};

//  'https://api.apilayer.com/currency_data/convert?to=BOB&from=USD&amount=1',

export const CONVERTER_DOLLAR = {
  success: true,
  query: {
    from: 'USD',
    to: 'BOB',
    amount: 1,
  },
  info: {
    timestamp: 1664082963,
    quote: 6.95361,
  },
  result: 6.95361,
};

export const TRACKER_DOLLAR = {
  success: true,
  timeframe: true,
  start_date: '2022-09-18',
  end_date: '2022-09-25',
  source: 'USD',
  quotes: {
    '2022-09-19': {
      USDBOB: 6.828416,
    },
    '2022-09-20': {
      USDBOB: 6.90908,
    },
    '2022-09-21': {
      USDBOB: 6.915233,
    },
    '2022-09-22': {
      USDBOB: 6.914142,
    },
    '2022-09-23': {
      USDBOB: 6.90469,
    },
    '2022-09-24': {
      USDBOB: 6.95361,
    },
    '2022-09-25': {
      USDBOB: 6.95361,
    },
  },
};

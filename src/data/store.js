import { uid } from 'uid';

export const updatedStore = ({
  country,
  official,
  symbol,
  savedDate,
  rate,
}) => {
  let data = [];
  try {
    if (localStorage.getItem('savedTrackers')) {
      data = JSON.parse(localStorage.getItem('savedTrackers'));
    }

    const trackerObj = {
      country,
      official,
      symbol,
      savedDate,
      rate,
      defaultRate: '1 USD',
      id: uid(),
    };

    data.push(trackerObj);
    localStorage.setItem('savedTrackers', JSON.stringify(data));
    return {
      id: trackerObj.id,
      error: false,
      message: 'Saved tracker',
    };
  } catch (error) {
    return {
      error: true,
      message: 'Error save tracker',
    };
  }
};

export const readStore = () => {
  let data = [];
  try {
    if (localStorage.getItem('savedTrackers')) {
      data = JSON.parse(localStorage.getItem('savedTrackers'));
    }

    return {
      data,
      error: false,
      message: 'Read tracker',
    };
  } catch (error) {
    return {
      error: true,
      message: 'Error read tracker',
    };
  }
};

export const removedStore = (idRemove) => {
  let data = [];
  try {
    if (localStorage.getItem('savedTrackers')) {
      data = JSON.parse(localStorage.getItem('savedTrackers'));
    }

    const updatedDate = data.filter(({ id }) => id !== idRemove);
    localStorage.setItem('savedTrackers', JSON.stringify(updatedDate));

    return {
      error: false,
      message: 'Removed tracker',
    };
  } catch (error) {
    return {
      error: true,
      message: 'Error removed tracker',
    };
  }
};

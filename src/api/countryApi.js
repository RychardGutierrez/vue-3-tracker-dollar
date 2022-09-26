const PATH = 'https://restcountries.com/v3.1/name/';

export const getSeachContries = async (seachCountry) => {
  const result = await fetch(`${PATH}${seachCountry}?fields=name,currencies`);

  if (result.status === 200) {
    return await result.json();
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

export const getFlagContries = async (seachCountry) => {
  const result = await fetch(`${PATH}${seachCountry}?fields=flags`);

  if (result.status === 200) {
    return await result.json();
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

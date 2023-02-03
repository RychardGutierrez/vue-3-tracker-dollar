import { useRouter } from 'vue-router';

export default function useRouteCountry() {
  const router = useRouter();

  const goToCountry = (searchResult) => {
    const country = searchResult.name.common.toLowerCase().replaceAll(' ', '');
    // Route - go to contry view
    router.push({
      name: 'countryView',
      params: {
        country,
      },
      query: {
        official: searchResult.name.official,
        symbols: Object.keys(searchResult.currencies)[0],
        preview: true,
      },
    });
  };

  const goToCountryByTracker = (tracker) => {
    router.push({
      name: 'countryView',
      params: {
        country: tracker.country,
      },
      query: {
        official: tracker.official,
        symbols: tracker.symbol,
        id: tracker.id,
      },
    });
  };


  return {
    goToCountry,
    goToCountryByTracker
  };
}

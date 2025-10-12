const entry = 'https://kinopoiskapiunofficial.tech/api/v1';
const entryV2 = 'https://kinopoiskapiunofficial.tech/api/v2.2';

interface apiItemI {
  url: string,
  title?: string,
  query?: string,
}

const Api = {

  movies: {
    top250: {
      url: `${entryV2}/films/top`,
      title: 'Топ 250',
    },
    popular: {
      url: `${entryV2}/films`,
      title: 'Популярыне фильмы',
      query: 'type=FILM&order=NUM_VOTE',
    },
  },

  singleMovie: {
    main: {
      url: `${entryV2}/films/`,
    },

    staff: {
      url: `${entry}/staff`,
    },
  },

  filters: {
    url: `${entryV2}/films/filters`,
  },
};

export { Api, apiItemI };

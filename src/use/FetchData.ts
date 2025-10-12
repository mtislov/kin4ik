import axios from 'axios';
import store from '@/store';

interface configI {
  signal?: typeof AbortController.prototype.signal
  headers: any,
}

const config: configI = {
  headers: {
    'X-API-KEY': '17bc2778-ec19-4c92-8a7b-e11508d408a9',
    'Content-Type': 'application/json',
  },
};

interface settingsI {
  loading: boolean,
  abortPrev?: boolean,
}

let controller = new AbortController();

export default async function UseFetchData(url: string, settings?: settingsI) {
  if (settings?.abortPrev) {
    controller.abort();
    controller = new AbortController();
    config.signal = controller.signal;
  }

  if (settings?.loading) store.commit('toggleLoading');
  const response = await axios.get(url, config)
    .catch((e) => {
      console.log(e);
    });
  if (settings?.loading) store.commit('toggleLoading');

  return response?.data;
}

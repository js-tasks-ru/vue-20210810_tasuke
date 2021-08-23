import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const app = {
  data() {
    return {
      selectedMeetup: 0,
      meetupIds: [1, 2, 3, 4, 5],
      titleMeetup: '',
    };
  },
  watch: {
    selectedMeetup(newValue, oldValue) {
      fetchMeetupById(newValue).then((result) => {
        this.titleMeetup = result.title;
      });
    },
  },
};

createApp(app).mount('#app');

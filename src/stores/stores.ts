import { writable } from 'svelte/store';

import { config } from '../constants';

export const universities = writable([]);

async function fetchUniversities() {
  const response = await fetch(`${config.NEST_URL}/universities/`);
  const data = await response.json();
  universities.set(data);
}
fetchUniversities();
'use strict';

import { readFileSync } from 'fs';

const developerStore = {
  getAppInfo() {
    const data = readFileSync('./models/developer-store.json');
    return JSON.parse(data);
  }
};

export default developerStore;
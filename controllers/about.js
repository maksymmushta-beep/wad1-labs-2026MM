'use strict';
import logger from "../utils/logger.js";
import developerStore from "../models/developer-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const appInfo = developerStore.getAppInfo();

    const viewData = {
      title: "About the Playlist App",
      developer: appInfo.employee 
    };
    
    response.render('about', viewData);   
  },
};
export default about;
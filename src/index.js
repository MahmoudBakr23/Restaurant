console.log('Let us GO!');
import * as home from './home.js';
import * as menu from './menu.js';
import * as about from './about.js';

home.navigation()

home.homePage()
menu.menuPage()
about.aboutPage()

home.homeEventListeners()
menu.menuEventListeners()
about.aboutEventListeners()
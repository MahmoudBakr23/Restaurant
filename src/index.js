import * as home from './home';
import * as menu from './menu';
import * as about from './about';
import * as contact from './contact';

home.navigation();

home.homePage();
menu.menuPage();
about.aboutPage();
contact.contactPage();

home.homeEventListeners();
menu.menuEventListeners();
about.aboutEventListeners();
contact.contactEventListeners();
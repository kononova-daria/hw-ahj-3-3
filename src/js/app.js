import Actions from './Actions';
import Rendering from './Rendering';

const page = new Rendering();

page.bindToDOM(document.querySelector('.container'), document.querySelector('.modal-container'));
page.allBinding();

const act = new Actions(page);
act.init();

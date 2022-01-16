export default class Rendering {
  constructor() {
    this.modal = null;
    this.modalInput = null;
    this.container = null;
    this.msgBox = null;
    this.msgInput = null;
  }

  bindToDOM(container, modal) {
    if (!(modal instanceof HTMLElement)) throw new Error('Modal is not HTMLElement');
    if (!(container instanceof HTMLElement)) throw new Error('Container is not HTMLElement');
    this.modal = modal;
    this.container = container;
  }

  checkBinding() {
    if (this.modal === null) throw new Error('Modal not bind to DOM');
    if (this.container === null) throw new Error('Container not bind to DOM');
  }

  allBinding() {
    this.checkBinding();
    this.msgBox = this.container.querySelector('.msg-container');
    this.msgInput = this.container.querySelector('.msg-input');
    this.modalInput = this.modal.querySelector('.modal-input');
  }

  drawMsg(data) {
    const divMsg = document.createElement('div');
    divMsg.classList.add('msg');
    this.msgBox.prepend(divMsg);

    const divTitle = document.createElement('div');
    divTitle.classList.add('msg-title');

    const year = data.date.getFullYear();
    let month = data.date.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let day = data.date.getDate();
    if (day < 10) day = `0${day}`;
    let hours = data.date.getHours();
    if (hours < 10) hours = `0${hours}`;
    let minutes = data.date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    const created = `${day}.${month}.${year} ${hours}:${minutes}`;

    divTitle.textContent = created;
    divMsg.appendChild(divTitle);

    const divText = document.createElement('div');
    divText.classList.add('msg-text');
    divText.textContent = `${data.text}`;
    divMsg.appendChild(divText);

    const divCoord = document.createElement('div');
    divCoord.classList.add('msg-coord');
    divCoord.innerHTML = data.coord;
    divMsg.appendChild(divCoord);
  }
}

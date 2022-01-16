import checkData from './validation';

export default class Actions {
  constructor(page) {
    this.page = page;
    this.msg = [];
  }

  init() {
    this.page.msgInput.addEventListener('keydown', (event) => {
      this.sendMsg(event);
    });
    this.page.modal.addEventListener('click', (event) => {
      this.sendMsgWithoutCoords(event);
      this.closeModal(event);
    });
    this.page.modalInput.addEventListener('focus', () => {
      this.hiddenError();
    });
  }

  closeModal(event) {
    if (event.target.classList.contains('close')) {
      this.page.modal.classList.add('hidden');
      this.page.modalInput.value = '';
    }
  }

  sendMsg(event) {
    if (event.keyCode === 13 && this.page.msgInput.value) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          const { coords } = data;
          this.page.drawMsg({
            date: new Date(),
            text: this.page.msgInput.value,
            coord: `[${coords.latitude}, ${coords.longitude}]`,
          });
          this.page.msgInput.value = '';
        }, () => {
          this.page.modal.classList.remove('hidden');
          this.page.modal.querySelector('.error').classList.add('hidden');
        });
      }
    }
  }

  sendMsgWithoutCoords(event) {
    if (event.target.classList.contains('ok')) {
      const coords = checkData(this.page.modalInput.value);
      if (coords) {
        this.page.drawMsg({
          date: new Date(),
          text: this.page.msgInput.value,
          coord: `[${coords.latitude}, ${coords.longitude}]`,
        });
        this.page.modal.classList.add('hidden');
        this.page.msgInput.value = '';
        this.page.modalInput.value = '';
      } else {
        this.page.modal.querySelector('.error').classList.remove('hidden');
      }
    }
  }

  hiddenError() {
    this.page.modal.querySelector('.error').classList.add('hidden');
  }
}

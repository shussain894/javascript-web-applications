class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hidebuttonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hidebuttonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {

    const message = document.querySelector('#message-input').value;

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message 

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  };
};

module.exports = MessageView;
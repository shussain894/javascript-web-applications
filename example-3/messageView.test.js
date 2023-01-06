/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays a message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input')

    inputEl.value = 'This is a message'
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a message')
  });
  it('clears the message after clicking the other button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hidebuttonEl = document.querySelector('#hide-message-button');
    hidebuttonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});
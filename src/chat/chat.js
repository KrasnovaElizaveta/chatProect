'use strict';

class Chat {
    constructor({el, data}) { //элемент и данные
        this.el = el;
        this.data = data || {messages: []};
    }

    render() {
        this.el.innerHTML = `
			<div class="chat">
				${this._getMessagesHtml()}
			</div>
		`;
    }

    addMessage(name,text) {
        this.data.messages = [
            ...this.data.messages,
            {name, text}
        ];
    }

    _getMessagesHtml() {
        return this.data.messages.map((messagesData) => {
            return `<div class="chat__message">
				${messagesData.name}:${messagesData.text}
			</div>`;
        }).join('');
    }
}
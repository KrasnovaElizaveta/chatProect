'use strict';
import {Chat} from '../chat/chat.js';
import {Form} from "../form/form.js";

/*export class App {
    constructor(el) {
        this.el = el;

        this.chat = new Chat({
            el: document.createElement('div'),
            data: {
                messages: [
                    // {text: 'Привет! Я онлайн', name: 'Tim'},
                    // {text: 'Привет! Я тоже', name: 'Eugeny'}
                ]
            }
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: (name, message) => {
                this.chat.addMessage(name, message);
                this.chat.render();
            }
        });

        this.el.append(this.chat.el, this.form.el);

        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }
}*/

export class App {
    constructor({el}) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div')
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);
        this.chat.add([
            {
                name: 'Sofia',
                text: 'Привет! Хочу показать свой чат!'
            },
            {
                name: 'Sergey',
                text: 'Я все сделал!'
            },
            {
                name: 'Sergey',
                text: 'Я все сделал!'
            },
            {
                name: 'Sergey',
                text: 'Я все сделал!'
            }
        ]);

        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onFormSubmit({text}) {
        this.chat.addOne({
            text,
            name: 'Me'
        });
        this.render();
    }
}

'use strict';

class Form {
    constructor({el, onSubmit}) {//
        this.el = el;
        this.cb = onSubmit;

        this._initEvents();
    }

    render() {
        this.el.innerHTML = `
			<form class="form">
			    <input name="name" maxlength="10" size="40" placeholder="name">
			    <br>
				<textarea name="message"></textarea>
				<br>
				<input type="submit" value="SEND">
			</form>
		`;
    }

    _initEvents() {
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(event) {
        event.preventDefault();
        const el = event.target;
        const message = el.querySelector('[name="message"]').value;
        const name = el.querySelector('[name="name"]').value;
        this.cb(name,message);
        el.reset()
    }
}
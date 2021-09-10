(function ($) {
	$.fn.multi = function (data) {
		this.getValues = function () {
			let value = $('input[name="selection"]').val();
			return [value];
		};

		this.createList = function (menu, targetUL) {
			// CREATE LIST
			var i;
			for (i = 0; i < menu.length; i++) {
				if (menu[i].hasOwnProperty('name')) {
					let classes = menu[i].classes ? menu[i].classes : '';
					let isChecked = menu[i].checked ? menu[i].checked : false;

					var nameText = document.createTextNode(menu[i].name);

					var newLI = document.createElement('li');

					const checkbox = document.createElement('input');
					checkbox.type = 'checkbox';
					checkbox.value = menu[i].name;
					checkbox.name = 'menu';
					checkbox.id = menu[i].id;
					checkbox.checked = isChecked;
					checkbox.className = classes;
					newLI.appendChild(checkbox);
					newLI.appendChild(nameText);

					targetUL.appendChild(newLI);
				}

				if (menu[i].hasOwnProperty('children')) {
					// Define new <ul> tag
					var newUL = document.createElement('ul');
					// Append new <ul> tag
					var lowUl = targetUL.appendChild(newUL);
					// Select new lower level <ul> tag
					var lowUL = targetUL.querySelector('ul');
					// Recurse
					this.createList(menu[i].children, newUL);
				}
			}
		};

		this.changeValue = function () {
			$('input[name="menu"]').on('change', function () {
				let selected = [];
				let selectedId = [];
				//clear text bar
				$('.bar .text').html('');

				$('input[name="menu"]:checked').each(function () {
					selected.push(this.value);
					selectedId.push(this.id);
				});

				$('input[name="selection"]').val(selectedId);

				//Add to Input Bar
				selected.map((select) => {
					const rootElement = document.getElementById('text');
					const spanElement = document.createElement('span');
					const textNode = document.createTextNode(select);
					spanElement.appendChild(textNode);
					rootElement.appendChild(spanElement);
				});
			});
		};

		this.initialize = function () {
			this.html(
				`<input type='hidden' name='selection'></input><div class='bar'><div class='text' id='text'></div><div class='chevron'><</div></div><div id='list-cont'><ul id='main-list'></ul></div>`
			);
			const rootElement = document.getElementById('main-list');
			const mainElement = document.getElementById(this.attr('id'));

			// Create List
			this.createList(data, rootElement);

			// Add to input hidden
			this.changeValue();
			$('input[name="menu"]').trigger('change');
			//Slide Toggle
			$('.bar').click(function () {
				$('#list-cont').slideToggle();
			});
			return this;
		};

		return this.initialize();
	};
})(jQuery);

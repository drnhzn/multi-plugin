## Multilevel Dropdown JQuery Plugin

## Directory Structure

`├──`[`css/`](./css) — CSS Files for Style<br>
`├──`[`example`](./example) — Sample Usage for the plugin<br>
`├──`[`plugin`](./plugin) — Where the JQuery Plugin is located<br>

#### Getting Started

Clone the repo<br />
`git clone https://github.com/drnhzn/multi-plugin`

Just add a link to the css file in your `<head>`:

```html
<!-- Add the multi.css -->
<link rel="stylesheet" type="text/css" href="/css/multi.css" />
```

Add slick.js before your closing <body> tag, after jQuery (requires jQuery 1.7 +)

```html
<script type="text/javascript" src="/js/jquery.multi.js"></script>
```

Set up your HTML markup.

```html
<div id="multi-select"></div>
```

#### Usage

Initialize the Plugin and pass the menu object to the plugin.

```js
let multi = $('#multi-select').multi(menu);
```

Get the Selected Value

```js
multi.getValues();
```

#### Sample Menu Object

checked and classes are optional.

```js
const menu = [
	{
		id: 0,
		name: 'Gears',
		classes: 'checkbox-class',
		children: [
			{
				id: 1,
				name: 'Bag',
				checked: true,
			},
			{
				id: 2,
				name: 'Wallet',
				checked: false,
				children: [
					{
						id: 3,
						name: 'Girls',
						checked: false,
						children: [
							{
								id: 4,
								name: '10 years old',
								checked: false,
							},
						],
					},
					{
						id: 5,
						name: 'Boys',
						children: [
							{
								id: 4,
								name: '10 years old',
								checked: false,
							},
							{
								id: 6,
								name: '20 years old',
								checked: false,
							},
							{
								id: 7,
								name: '30 years old',
								checked: false,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 0,
		name: 'Test',
		checked: false,
		children: [
			{
				id: 5,
				name: 'test 2',
				checked: false,
			},
		],
	},
];
```

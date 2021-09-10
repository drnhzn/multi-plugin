$(document).ready(function () {
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
	let multi = $('#multi-select').multi(menu);

	console.log(multi.getValues());
});

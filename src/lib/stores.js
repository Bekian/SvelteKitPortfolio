import { readable } from 'svelte/store';

export const posts = [
	{
		title: 'A Title!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Tag 1',
			'Tag 2',
			'Tag 3'
		]
	},
	{
		title: 'Another Title!',
		description: 'kek ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Tag 1',
			'Tag 2',
			'Tag 3'
		]
	},
	{
		title: 'A final Title!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Tag 1',
			'Tag 2',
			'Tag 3'
		]
	}
];
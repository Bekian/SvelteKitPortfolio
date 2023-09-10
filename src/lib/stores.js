import { readable } from 'svelte/store';

export const posts = [
	{	
		src: "./smudgepfp.jpeg",
		title: 'A Title!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Javascript',
			'This is a really long tag ',
			'This is a really long tag'
		]
	},
	{	
		src: "./smudgepfp.jpeg",
		title: 'Another Title!',
		description: 'kek ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Tag 1',
			'Tag 2',
			'Tag 3'
		]
	},
	{	
		src: "./smudgepfp.jpeg",
		title: 'A final Title!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: [
			'Tag 1',
			'Tag 2',
			'Tag 3'
		]
	}
];

export const navPages = [
	// the url already has the slash so its not needed
	// the form is {url:'string', title:'string'} TODO: jsdoc this
	{
		url:'',
		title:'Home'
	},
	{
		url: 'projects',
		title:'Projects'
	},
	{
		url: 'about',
		title: 'About'
	},
	{
		url: 'contact',
		title: 'Contacts'
	}
]
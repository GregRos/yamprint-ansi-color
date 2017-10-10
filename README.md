
# yamprint-ansi-color
Provides a colorful theme for yamprint.

Usage: 

	import {yamprint} from 'yamprint';
	import {Themes} from 'yamprint-ansi-color';
	let yp = yamprint.create(Themes.regular);
	console.log(yp({hello : "hi"}));
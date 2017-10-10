# yamprint-ansi-color
![travis ci](https://travis-ci.org/GregRos/yamprint-ansi-color.svg?branch=master)


Provides a colorful theme for yamprint.

Usage: 

	import {yamprint} from 'yamprint';
	import {Themes} from 'yamprint-ansi-color';
	let yp = yamprint.create(Themes.regular);
	console.log(yp({hello : "hi"}));
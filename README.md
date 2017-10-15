# yamprint-ansi-color
[![](https://travis-ci.org/GregRos/yamprint-ansi-color.svg?branch=master)](https://travis-ci.org/GregRos/yamprint-ansi-color)
[![](https://badge.fury.io/js/yamprint-ansi-color.svg)](https://www.npmjs.com/package/yamprint-ansi-color)

Provides a colorful theme for [yamprint](https://github.com/GregRos/yamprint).

Usage: 

	import {yamprint} from 'yamprint';
	import {Themes} from 'yamprint-ansi-color';
	let yp = yamprint.create(Themes.regular);
	console.log(yp({hello : "hi"}));
	
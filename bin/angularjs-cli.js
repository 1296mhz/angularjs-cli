#! /usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const CreateApp = require('../generator/lib/CreateApp');

const args = process.argv;
const command = args[2];

console.log(chalk.bgRed("Welocome to AngularJS CLI!"));

const cli = meow(`
	Usage
	  $ $angularjs-cli new AppName

	Options
    --routing, -r Generates a routing module.

	Examples
	  $ $angularjs-cli new --routing
	  
`, {
	flags: {
		routing: {
			type: 'boolean',
			alias: 'r'
		}
	}
});

switch(cli.input[0]){
    case undefined:
    console.log(chalk.red.bgWhite("Please your command!"))
    break;
    case 'new':
    //console.log(cli.input[1]);
    let createApp = new CreateApp(cli.input[1], cli.flags);
    createApp.createSkeleteonDir();
    createApp.copyMainFiles();
    createApp.processingAssetsFiles();
    createApp.processingTemplateFiles();
    break;
    case 'n':
    break;
    case 'generate':
    break;
    case 'g':
    break;
    case 'serve':
    break;
    case 's':
    break;
    default:
    break;
}






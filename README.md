# E2E-Setup
Important points that need to keep in consideration:-
1.	Node.js installation 
-	It is open source platform. It supports JavaScript runtime environment for executing JavaScript.
-	Download Node.js package from https://nodejs.org/en/download/
-	Install it manually by running installer and following the prompts in the installer
-	Once node is installed ,to check if node is installed – write following command in command line 
o	node  -v  
	This will print node version if node is successfully installed
                       Usage of NPM (Node Package Manager):- 
o	To make use of packages in Node.js we need to be able to install and manage them in useful way and this is where node package manager comes in. It install the packages you want to use and provides useful interface to work with those packages
o	To check if ‘NPM’ is installed after successful installation of ‘Node.Js’ – write following command in command line
o	npm  -v

2.	Protractor Installation locally in project environment 
-	It is required to install protractor locally to work on consistent version of protractor that is stable, write following command in command line (set local path of project in command line )
		o	 npm install protractor --save-dev
			       This command will install protractor locally with specific version in project environment (This will require once only at initial stage while set up is done first time of project)
3.	Install Jasmine screenshot reporter
-	It is screenshot reporter to take snapshot of each test case that is executed with in project environment ,write following command in command line (set local path of project in command line )
o	npm install protractor-jasmine2-screenshot-reporter --save-dev
	This will require once only at initial stage while set up is done first time of project

4.	Set up of package.Json file 
-	The usage of this file is to install all packages with their specific version locally to use them in required project environment
-	Once protractor’s stable version is installed locally for particular project environment, use following command to use same set up of entire project in other pc
o	npm install  
	This command will install  protractor version, jasmine framework version, type script version, tsd version [this command is required to execute before typescript execution],jasmine screenshot reporter version

5.	Set up tsd.json file 
-	TSD is package manager, it is used to search and install typescript definition files from the ‘Typing’ repository. This repository is defined by node.
-	This file contains currently protractor, selenium-webdriver, and node and jasmine tsd files.
-	The file is executed once at initial stage before execution of typescript, use following command 
o	npm install -g bower tsd
	this command will install all type script definition of ‘tsd.json’ file as well as install all JavaScript library (using bower command )

6.	Set up tscconfig.json file 
-	This file specifies compiler options required to compile project.

 


			








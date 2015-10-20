# jsFile-rtf [![Build Status](https://secure.travis-ci.org/jsFile/jsFile-rtf.png?branch=master)](https://travis-ci.org/jsFile/jsFile-rtf)
Engine for jsFile library for working with documents in [RTF](https://en.wikipedia.org/wiki/Rich_Text_Format) format

## Installation
### via NPM

You can install a <code>jsFile-rtf</code> package very easily using NPM. After
installing NPM on your machine, simply run:
````
$ npm install jsfile-rtf
````

### with Git

You can clone the whole repository with Git:
````
$ git clone git://github.com/jsFile/jsFile-rtf.git
````

### from latest version

Also you can download [the latest release](https://github.com/jsFile/jsFile-rtf/tree/master/dist) of `RTF` engine and include built files to your project.


##Usage
````js
import JsFile from 'JsFile';
import JsFileRtf from 'jsfile-rtf';

const jf = new JsFile(file, options);
````
`file` - a file of [RTF](https://en.wikipedia.org/wiki/Rich_Text_Format) type. You may find information about options and `jsFile` in [documentation](https://github.com/jsFile/jsFile#installation)

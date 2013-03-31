leaderboard-mocha
=================

Meteor leaderboard with some client side mocha tests and [Grunt][]

This project was taken straight from https://github.com/mad-eye/meteor-mocha-web.
And then a little enhanced to use with [Grunt][]

## Installation

```bash
npm -g install phantomjs
npm -g install mocha-phantomjs
cd tests
npm install
```

## Usage

To run tests just use:
```
grunt # probably in a different terminal
```

And now [Grunt][] will be watching your project files and re-run test whenever
there is changes detected.

[Grunt]:http://gruntjs.com/

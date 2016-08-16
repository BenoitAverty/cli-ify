#! /usr/bin/env node

var module = require(process.argv[2])

var args = process.argv.slice(3);

var result = module.apply(undefined, args);

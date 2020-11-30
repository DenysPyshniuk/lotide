const assertEqual = require("../assertEqual");

const head = require('../head');


assertEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
assertEqual(head([, 6, 7]), 5);

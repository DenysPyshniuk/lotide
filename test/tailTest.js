const tail = require('../tail')

tail(["Hello", "Lighthouse", "Labs"]); // => ["Lighthouse", "Labs"];
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length , 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!

const pipe = arr => arg => arr.reduce((accum, fn) => fn(accum), arg);

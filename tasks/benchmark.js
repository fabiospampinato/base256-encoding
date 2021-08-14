
/* IMPORT */

const benchmark = require ( 'benchloop' );
const fs = require ( 'fs' );
const U8 = require ( 'uint8-encoding' );
const {default: Base256} = require ( '../dist' );

const WAP = fs.readFileSync ( './tasks/war_and_peace.txt', 'utf8' );
const WAP_UINT8 = U8.encode ( WAP );
const WAP_ENCODED = Base256.encodeStr ( WAP );
const WAP_ENCODED_UINT8 = Base256.encode ( WAP_UINT8 );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1,
  log: 'compact'
});

benchmark ({
  name: 'encode',
  fn: () => {
    Base256.encode ( WAP_UINT8 );
  }
});

benchmark ({
  name: 'encodeStr',
  fn: () => {
    Base256.encode ( WAP );
  }
});

benchmark ({
  name: 'decode',
  fn: () => {
    Base256.decode ( WAP_ENCODED_UINT8 );
  }
});

benchmark ({
  name: 'decodeStr',
  fn: () => {
    Base256.decode ( WAP_ENCODED );
  }
});

benchmark.summary ();

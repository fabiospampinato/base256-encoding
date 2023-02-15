
/* IMPORT */

import benchmark from 'benchloop';
import fs from 'node:fs';
import U8 from 'uint8-encoding';
import Base256 from '../dist/node.js';

/* HELPERS */

const WAP = fs.readFileSync ( './tasks/fixture.txt', 'utf8' );
const WAP_UINT8 = U8.encode ( WAP );
const WAP_ENCODED = Base256.encodeStr ( WAP );
const WAP_ENCODED_UINT8 = Base256.encode ( WAP_UINT8 );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1
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

benchmark ({
  name: 'is',
  fn: () => {
    Base256.is ( WAP_ENCODED );
  }
});

benchmark.summary ();


/* IMPORT */

const {describe} = require ( 'fava' );
const {default: Base256} = require ( '../dist' );
const Fixtures = require ( './fixtures' );

/* MAIN */

describe ( 'Base256', it => {

  it ( 'works with strings', t => {

    for ( const fixture of Fixtures ) {

      const encoded = Base256.encodeStr ( fixture );
      const decoded = Base256.decodeStr ( encoded );

      t.is ( decoded, fixture );

    }

  });

  it ( 'works with Uint8Arrays', t => {

    const encoder = new TextEncoder ();

    for ( const fixture of Fixtures ) {

      const fixtureU8 = encoder.encode ( fixture );

      const encoded = Base256.encode ( fixtureU8 );
      const decoded = Base256.decode ( encoded );

      t.deepEqual ( decoded, fixtureU8 );

    }

  });

});

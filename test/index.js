
/* IMPORT */

const {Buffer} = require ( 'buffer' );
const fc = require ( 'fast-check' );
const {describe} = require ( 'fava' );
const {default: Base256} = require ( '../dist/node' );
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

  it ( 'works with fc-generated codepoints', t => {

    const assert = str => t.is ( Base256.decodeStr ( Base256.encodeStr ( str ) ), str );
    const property = fc.property ( fc.fullUnicode (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

  it ( 'works with fc-generated strings', t => {

    const assert = str => t.is ( Base256.decodeStr ( Base256.encodeStr ( str ) ), str );
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

  it ( 'works like Buffer', t => {

    const assert = str => Base256.is ( str ) ? t.deepEqual ( Base256.encodeStr ( str ), Buffer.from ( str ).toString ( 'latin1' ) ) : t.pass ();
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

  it ( 'can detect base256-encoded strings', t => {

    const fixtures = [
      ['', true],
      ['abc', true],
      ['\u0000\u00ff', true],
      ['\u0100', false],
      ['\uffff', false],
      ['😃', false],
      ['👪', false]
    ];

    for ( const [fixture, result] of fixtures ) {

      t.is ( Base256.is ( fixture ), result );

    }

  });

});

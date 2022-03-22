
/* IMPORT */

import is from './is';

/* MAIN */

const Node = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Buffer.from ( data ).toString ( 'latin1' );

  },

  encodeStr: ( data: string ): string => {

    return Buffer.from ( data ).toString ( 'latin1' );

  },

  decode: ( data: string ): Uint8Array => {

    const buffer = Buffer.from ( data, 'latin1' );

    return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

  },

  decodeStr: ( data: string ): string => {

    return Buffer.from ( data, 'latin1' ).toString ();

  },

  is

};

/* EXPORT */

export default Node;

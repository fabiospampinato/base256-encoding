
/* IMPORT */

import fromCharCodes from 'string-from-charcodes';
import U8 from 'uint8-encoding';
import is from './is';

/* MAIN */

const Browser = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return fromCharCodes ( data );

  },

  encodeStr: ( data: string ): string => {

    return Browser.encode ( U8.encode ( data ) );

  },

  decode: ( data: string ): Uint8Array => {

    const uint8 = new Uint8Array ( data.length );

    for ( let i = 0, l = data.length; i < l; i++ ) {

      uint8[i] = data.charCodeAt ( i );

    }

    return uint8;

  },

  decodeStr: ( data: string ): string => {

    return U8.decode ( Browser.decode ( data ) );

  },

  is

};

/* EXPORT */

export default Browser;


/* IMPORT */

import fromCharCodes from 'string-from-charcodes';
import U8 from 'uint8-encoding';

/* MAIN */

const Base256 = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return fromCharCodes ( data );

  },

  encodeStr: ( data: string ): string => {

    return Base256.encode ( U8.encode ( data ) );

  },

  decode: ( data: string ): Uint8Array => {

    const uint8 = new Uint8Array ( data.length );

    for ( let i = 0, l = data.length; i < l; i++ ) {

      uint8[i] = data.charCodeAt ( i );

    }

    return uint8;

  },

  decodeStr: ( data: string ): string => {

    return U8.decode ( Base256.decode ( data ) );

  },

  is: ( data: string ): boolean => {

    return !/[\u0100-\uffff]/.test ( data );
  }

};

/* EXPORT */

export default Base256;

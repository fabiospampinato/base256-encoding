
/* IMPORT */

import U8 from 'uint8-encoding';

/* MAIN */

const Base256 = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    const {length} = data;

    if ( length <= 8192 ) { // Small enough length, no "call stack size exceeded" error will be thrown

      return String.fromCharCode.apply ( String, Array.from ( data ) );

    } else { // Length too large, encoding in chunks

      const chunks: string[] = [];

      for ( let ci = 0, i = 0; i < length; ci++ ) {

        const datum = Array.from ( data.slice ( i, i += 8192 ) );

        chunks[ci] = String.fromCharCode.apply ( String, datum );

      }

      return chunks.join ( '' );

    }

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

  }

};

/* EXPORT */

export default Base256;

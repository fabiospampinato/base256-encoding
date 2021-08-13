
/* MAIN */

const Base256 = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Array.prototype.map.call ( data, charCode => String.fromCharCode ( charCode ) ).join ( '' );

  },

  encodeStr: ( data: string ): string => {

    const encoder = new TextEncoder ();
    const uint8 = encoder.encode ( data );
    const encoded = Base256.encode ( uint8 );

    return encoded;

  },

  decode: ( data: string ): Uint8Array => {

    const uint8 = new Uint8Array ( data.length );

    for ( let i = 0, l = data.length; i < l; i++ ) {

      uint8[i] = data.charCodeAt ( i );

    }

    return uint8;

  },

  decodeStr: ( data: string ): string => {

    const decoder = new TextDecoder ();
    const uint8 = Base256.decode ( data );
    const decoded = decoder.decode ( uint8 );

    return decoded;

  }

};

/* EXPORT */

export default Base256;

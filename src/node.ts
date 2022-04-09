
/* IMPORT */

import Buffer from 'node-buffer-encoding';
import is from './is';

/* MAIN */

const Node = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Buffer.encode ( data, 'latin1' );

  },

  encodeStr: ( data: string ): string => {

    return Buffer.encodeStr ( data, 'latin1' );

  },

  decode: ( data: string ): Uint8Array => {

    return Buffer.decode ( data, 'latin1' );

  },

  decodeStr: ( data: string ): string => {

    return Buffer.decodeStr ( data, 'latin1' );

  },

  is

};

/* EXPORT */

export default Node;

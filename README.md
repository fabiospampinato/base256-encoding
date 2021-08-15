# Base256

Base256 encoding, the most memory-efficient encoding possible in JavaScript.

## Features

If a string contains only the 256 codepoints from `\u0000` to `\u00ff` then in modern engine it will consume one byte of memory per character. If that's not true then two (!) bytes of memory per character will be consumed, even if only one character goes out of range. Base64 falls within the golden range but it only uses 25% of the available codepoints, Base256 uses all of them and is therefore more memory efficient.

If you need the encoded string to be URL-friendly or something or if you are encoding tiny things you should go with Base64, otherwise using Base256 will save you a decent amount of memory.

## Install

```sh
npm install --save base256-encoding
```

## Usage

```ts
import Base256 from 'base256-encoding';

// Uint8Array encoding & decoding

{
  const raw = 'Hello 😃';
  const uint8 = new TextEncoder ().encode ( raw );
  console.log ( uint8 ); // => Uint8Array(10) [ 72, 101, 108, 108, 111,  32, 240, 159, 152, 131 ]

  const encoded = Base256.encode ( uint8 );
  console.log ( encoded ); // => 'Hello ð\x9F\x98\x83'

  const decoded = Base256.decodeStr ( encoded );
  console.log ( decoded ); // => // => Uint8Array(10) [ 72, 101, 108, 108, 111,  32, 240, 159, 152, 131 ]
}

// String encoding & decoding

{
  const raw = 'Hello 😃';
  const encoded = Base256.encodeStr ( raw );
  console.log ( encoded ); // => 'Hello ð\x9F\x98\x83'

  const decoded = Base256.decodeStr ( encoded );
  console.log ( decoded ); // => 'Hello 😃'
}

// Check if a string is base256-encoded

{
  console.log ( Base256.is ( 'Hello' ) ); // => true
  console.log ( Base256.is ( '😃' ) ); // => false
}
```

## License

MIT © Fabio Spampinato

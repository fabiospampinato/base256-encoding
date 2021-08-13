
/* MAIN */

const Fixtures = [
  '',
  '\0',
  '👪',
  'Hello, World!',
  new Array ( 55296 ).fill ( 0 ).map ( ( _, index ) => String.fromCharCode ( index ) ).join ( '' )
];

/* EXPORT */

module.exports = Fixtures;

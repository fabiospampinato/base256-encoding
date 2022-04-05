
/* MAIN */

const Fixtures = [
  '',
  '\0',
  '\ufeff',
  '👪',
  'Hello, World!',
  new Array ( 55296 ).fill ( 0 ).map ( ( _, index ) => String.fromCharCode ( index ) ).join ( '' )
];

/* EXPORT */

export default Fixtures;

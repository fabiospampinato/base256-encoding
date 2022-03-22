
/* MAIN */

const is = ( data: string ): boolean => {

  return !/[\u0100-\uffff]/.test ( data );

};

/* EXPORT */

export default is;

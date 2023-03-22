function potencies(){
    //Fem un array de 1 a 10
    const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
    let num = arrayRange(0, 10, 1);
    //E
    let num2 = num.map(x => 2**x);
    let num3 = num2.filter(x=>x<10);
    let num4 = num3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return num4;
}
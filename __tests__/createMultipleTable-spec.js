const multitable = require('../createMultipleTable.js');

it('should return null when invoke createMultipleTable given start greater than end',()=>{
       //given 
       const start = 3;
       const end = 1;
       //when
       const result= multitable.createMultipleTable(start,end);
       //then
       expect(result).toBe(null);
});
it('should return null when invoke createMultipleTable given start is less than zero or end greater than 1000',()=>{
    //given 
    const start = -1;
    const end = 1000;
    //when
    const result= multitable.createMultipleTable(start,end);
    expect(result).toBe(null);
});
it('should return null when invoke createMultipleTable given start is 3 and end 4 ',()=>{
    //given 
    const start = 3;
    const end = 3;
    //when
    const result= multitable.createMultipleTable(start,end);
    expect(result).toBe(
        '3*1=3\t3*2=6\t3*3=9\t\n'
    );
})
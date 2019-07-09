const prinntRec = require('../printReceipt.js')
it('should return -1 when invoke getName given id=0000', () => {
          //given 
          const id = '0000';
          //when
          const result = prinntRec.getName(id);
          //then
          expect(result).toBe("[ERROR]:no such id");
});
it('should return  Coca Cola when invoke getName given id=0001', () => {
          //given 
          const id = '0001';
          //when
          const result = prinntRec.getName(id);
          //then
          expect(result).toBe('Coca Cola');
});
it('should return 3 when invoke getPrice given id=0001', () => {
          //given 
          const id = '0001';
          //when
          const result = prinntRec.getPrice(id);
          //then
          expect(result).toBe(3);
});
it('should return -1 when invoke getPrice given id=0000', () => {
          //given 
          const id = '0000';
          //when
          const result = prinntRec.getPrice(id);
          //then
          expect(result).toBe("[ERROR]:no such id");
});
it('should return result when invoke countGoodsAmount given data ', () => {
          //given 
          const data = ['0001', '0003', '0005', '0003'];
          //when
          const result = prinntRec.countGoodsAmount(data);
          //then
          expect(result).toStrictEqual([{
                              'id': '0001',
                              'count': 1
                    },
                    {
                              'id': '0003',
                              'count': 2
                    },
                    {
                              'id': '0005',
                              'count': 1
                    }
          ]);
});
it('should return 20 when invoke getGoodsTotalPrice given such following data ', () => {
          //given 
          const data = ['0001', '0003', '0005', '0003'];
          //when
          const result = prinntRec.getGoodsTotalPrice(data);
          //then
          expect(result).toStrictEqual(20);
});
it('should return result when invoke getGoodsTotalPrice given such following data ', () => {
          //given 
          const data = ['0001', '0003', '0005', '0003'];
          //when
          const result = prinntRec.printReceipt(data);
          //then
          expect(result).toBe('Receipts\n'+
         '------------------------------------------------------------\n'+
          'Coca Cola\t\t3\t\t1\n'+
          'Pepsi-Cola\t\t5\t\t2\n'+
          'Dr Pepper\t\t7\t\t1\n'+
          '------------------------------------------------------------\n'+
          'Price: 20');
});
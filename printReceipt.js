const goodsList = [{
                    "id": "0001",
                    "name": "Coca Cola",
                    "price": 3
          },
          {
                    "id": "0002",
                    "name": "Diet Coke",
                    "price": 4
          },
          {
                    "id": "0003",
                    "name": "Pepsi-Cola",
                    "price": 5
          },
          {
                    "id": "0004",
                    "name": "Mountain Dew",
                    "price": 6
          },
          {
                    "id": "0005",
                    "name": "Dr Pepper",
                    "price": 7
          },
          {
                    "id": "0006",
                    "name": "Sprite",
                    "price": 8
          },
          {
                    "id": "0007",
                    "name": "Diet Pepsi",
                    "price": 9
          },
          {
                    "id": "0008",
                    "name": "Diet Mountain Dew",
                    "price": 10
          },
          {
                    "id": "0009",
                    "name": "Diet Dr Pepper",
                    "price": 11
          },
          {
                    "id": "0010",
                    "name": "Fanta",
                    "price": 12
          }
]

function getName(id) {
          for (var i in goodsList) {
                    if (goodsList[i].id == id) {
                              return goodsList[i].name;
                    }
          }
          return "[ERROR]:no such id";
}

function getPrice(id) {
          for (var i in goodsList) {
                    if (goodsList[i].id == id) {
                              return goodsList[i].price;
                    }
          }
          return "[ERROR]:no such id";
}

function countGoodsAmount(data) {
          // const data = ['0001', '0003', '0005', '0003'];
          var list = [
                    '0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009', '0010'
          ];
          var collection=[];
          var collectionA=[];
          for(var i in list){
                    var count=0;
                    for(var j in data){
                              if(list[i]==data[j]){
                                        count++;
                              }
                    }
          collection.push({
                    id:list[i],
                    count:count
          })
          }
          for(var i in collection){
                    if(collection[i].count>0){
                              collectionA.push({
                                        'id':collection[i].id,
                                        'count':collection[i].count
                              })   
                    }

          }
          console.log(collectionA);
          return collectionA;

}
function getGoodsTotalPrice(data){

      var GoodsAmountList=countGoodsAmount(data);
      var count=0;
      for(var i in GoodsAmountList){
                count+=getPrice(GoodsAmountList[i].id)*GoodsAmountList[i].count;
      }
      return count;



}
function printReceipt(data){
          // const data = ['0001', '0003', '0005', '0003'];
  var str='Receipts\n'+
  '------------------------------------------------------------\n';
  var GoodsAmountList=countGoodsAmount(data);
  for(var i in GoodsAmountList){
       str+=getName(GoodsAmountList[i].id)+'\t\t'+getPrice(GoodsAmountList[i].id)+'\t\t'+GoodsAmountList[i].count+'\n';
  }
  str+='------------------------------------------------------------\n'+
  'Price: '+getGoodsTotalPrice(data);
  console.log(str);
  return str;

}
module.exports = {
          getName,
          getPrice,
          countGoodsAmount,
          getGoodsTotalPrice,
          printReceipt
}
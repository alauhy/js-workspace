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
      for (let i in goodsList) {
            if (goodsList[i].id == id) {
                  return goodsList[i].name;
            }
      }
      return -1;
}

function getPrice(id) {
      for (let i in goodsList) {
            if (goodsList[i].id == id) {
                  return goodsList[i].price;
            }
      }
      return -1;
}

function isValid(id) {
      for (let i in goodsList) {
            if (goodsList[i].id == id) {
                  return true;
            }
      }
      return false;
}

function countGoodsAmount(data) {
      let list = [
            '0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009', '0010'
      ];
      let collection = [];
      let collectionA = [];
      for (let i in list) {
            let count = 0;
            for (let j in data) {
                  if (list[i] == data[j]) {
                        count++;
                  }
            }
            collection.push({
                  id: list[i],
                  count: count
            })
      }
      for (let i in collection) {
            if (collection[i].count > 0) {
                  collectionA.push({
                        'id': collection[i].id,
                        'count': collection[i].count
                  })
            }

      }

      return collectionA;

}

function getGoodsTotalPrice(data) {

      let goodsAmountList = countGoodsAmount(data);
      let count = 0;
      for (let i in goodsAmountList) {
            count += getPrice(goodsAmountList[i].id) * goodsAmountList[i].count;
      }
      return count;



}

function printReceipt(data) {
      for(let i in data){
            if(!isValid(data[i])){
                  return "[ERROR]:id is not valid";
            }
      }
      let str = 'Receipts\n' +
            '------------------------------------------------------------\n';
      let goodsAmountList = countGoodsAmount(data);

      for (let i in goodsAmountList) {
            str += getName(goodsAmountList[i].id) + '\t\t' + getPrice(goodsAmountList[i].id) + '\t\t' + goodsAmountList[i].count + '\n';
      }
      str += '------------------------------------------------------------\n' +
            'Price: ' + getGoodsTotalPrice(data);
      return str;

}
module.exports = {
      getName,
      getPrice,
      countGoodsAmount,
      getGoodsTotalPrice,
      printReceipt
}
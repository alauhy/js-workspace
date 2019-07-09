function isValid(start,end){
  return start<=end && start>0 && end <1000 ;
}


function createMultipleTable(start, end){
var str="";
if(!isValid(start,end)){
    return null;
}
else{
    for(let i =start ;i <= end;i++ ){
        for (let j = 1;j <= i;j++){
              str+=i+"*"+j+"="+(i*j)+"\t";
        }
        str+='\n';
    }
}


return str;

}

module.exports = {
    createMultipleTable,
    isValid,
};
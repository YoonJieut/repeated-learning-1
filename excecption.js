const workVariable = {
  first : "1",
  second : "2.5",
}

/**
 * 
 * @param {*} obj 
 * @return object
 * 
 * *  객체를 조회하여 속성의 값을 정수로 변환될 수 있는지 확인하는 함수
 */

function converToIntegers(obj){
  const result = {};
  for (const key in obj){ 
    try{
      const valueAsInterger = parseInt(obj[key], 10);
      if(valueAsInterger.toString() !== obj[key]){
        throw new Error(`${obj[key]}은 점수로 정확하게 변환될 수 없습니다.`)
      }
      result[key] = valueAsInterger;

    }catch(err){
      console.log(`"${key}" 속성 처리중 오류발생 ${err.massege} `);
    }
  }
}
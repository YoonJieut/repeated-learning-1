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
  for (const key in obj){  // key가 2개 뿐이지만, for in문을 사용하여 모든 객체의 속성을 순회한다.
    try{
      // parseInt 함수를 사용, 문자열을 점수로 변환
      // 변환된 값이 원래 갑과 다르면 에러 발생 (소수점 등..)
      const valueAsInterger = parseInt(obj[key], 10); // parseInt의 두 번째 매개변수 10은 10진수를 의미한다.
      if(valueAsInterger.toString() !== obj[key]){
        throw new Error(`${obj[key]}은 점수로 정확하게 변환될 수 없습니다.`)
        // 위 Error를 발생시키면, catch 구문으로 실행이 넘어간다.
      }
      // if() 조건식은 falsy(실패스러운), 즉 원하는 값이 아닌 경우에만 실행된다.
      // 즉, valueAsInterger 가 NaN이 아닌 경우에만 실행
      result[key] = valueAsInterger;

    }catch(err){
      // 변환 중 에러가 발생하면 여기서 처리합니다.
      console.log(`"${key}" 속성 처리중 오류발생 ${err.massege} 
      `);
      /**
       * 예외 처리와 에러 발생을 동의어로 혼동하는 경우가 매우 많기 때문에 정의합니다.
       * 에러는 try 부분에서 발생시키고, catch 부분에서 처리(후처리) 합니다.
       * 
       * 에러를 발생시키는 것과 다르게, catch 부분은 콘솔에 '에러'임을 명시했을 뿐, 에러를 발생시키는 것이 아니다.
       * 
       * 원하는 값을 반환하거나 다른 처리를 할 수 있다.
       */
    }
  }

  return result;
}

const convertedValues = converToIntegers(workVariable);
console.log(convertedValues);
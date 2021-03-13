// 二回目以降、実行を押下したときには前回の結果が消去され、今回分の結果が表示されるように修正しましょう。

// const reset =() => {
//   console.log('resetします')
// }

const show = () => {
  // 初期化する
  const outputNum = document.getElementById('outputNum');
  outputNum.innerHTML = '';
  
  // 入力値を取得する
  let inputFizz = document.getElementById('input-fizz').value ;
  let inputBuzz = document.getElementById('input-buzz').value ;
  
  
  
  // 入力値を数値型に型変換する
  let FizzNum = Number(inputFizz);
  let BuzzNum = Number(inputBuzz);
  
  
  // 共通の出力
  const Output = `【出力】`;
  document.getElementById('output-message').innerHTML = Output;
  

  // 入力値毎に分岐して出力する
  for(let i = 1; i < 100; i++) {
    // 整数か判断する
    if(Number.isInteger(FizzNum) === false || inputFizz === '' && inputBuzz === ''){ 
      let val = '整数値を入力してください'
      const li = document.createElement('li');
      outputNum.appendChild(li);
      li.textContent = val; 
      break;

      // 両方の倍数を表示する
    } else if (i % FizzNum === 0 && i % BuzzNum === 0) {
      let FizzBuzz = i;
      let val = `FizzBuzz${FizzBuzz}`
      const li = document.createElement('li');
      outputNum.appendChild(li);
      li.textContent = val;   

      // fizzNumに入力された値の倍数を表示する
    } else if (i % FizzNum === 0){
      let Fizz = i;
      let val = `Fizz${Fizz}`
      const li = document.createElement('li');
      outputNum.appendChild(li);
      li.textContent = val;   

       // BuzzNumに入力された値の倍数を表示する
    } else if(i % BuzzNum === 0) {
      let Buzz = i;
      let val = `Buzz${Buzz}`
      const li = document.createElement('li');
      outputNum.appendChild(li);
      li.textContent = val;   

    } else {
      
    };
  };
};
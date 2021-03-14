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

  // 整数値か判断する
  if(Number.isInteger(FizzNum) === false || Number.isInteger(BuzzNum) === false || inputFizz === '' && inputBuzz === ''){ 
    const caution = '整数値を入力してください'
    const li = document.createElement('li');
    outputNum.appendChild(li);
    li.textContent = caution; 
  } else {
    // もし整数値だったのなら次の繰り返し処理を行う
    for(let i = 1; i < 100; i++) {
      // 倍数の定数化
      const FizzNumMultiple = i % FizzNum === 0;
      const BuzzNumMultiple = i % BuzzNum === 0;
      
      // 両方の倍数を表示する
      if (FizzNumMultiple && BuzzNumMultiple) {
        const FizzBuzz = `FizzBuzz${i}`
        const li = document.createElement('li');
        outputNum.appendChild(li);
        li.textContent = FizzBuzz;   
  
        // fizzNumに入力された値の倍数を表示する
      } else if (FizzNumMultiple){
        const Fizz = `Fizz${i}`
        const li = document.createElement('li');
        outputNum.appendChild(li);
        li.textContent = Fizz;   
  
         // BuzzNumに入力された値の倍数を表示する
      } else if(BuzzNumMultiple) {
        const Buzz = `Buzz${i}`
        const li = document.createElement('li');
        outputNum.appendChild(li);
        li.textContent = Buzz;   
      } 
    }
  }   
}
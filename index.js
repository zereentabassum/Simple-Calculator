
    let numberDisplay = [];
    let input = 0;
    const calculateResult = (value)=>{
        if (input !==0) {
        input = parseFloat(input);

            add(input);
                        }
        let answer = value[0];
        let dividedByZero = 0;
        for (  let i = 2; i < value.length; i= i+2) {

            switch (numberDisplay[i-1]) {
                case '+':
                    answer+= value[i];
                    break;
                case '-':
                    answer-= value[i];
                    break;
                case '/':   
                 if (value[i] === 0)   dividedByZero = 1;
                 else     answer = answer / value[i];
                    break;
                case'*': answer = answer * value[i];
                    break;
            }

        }

        answer = answer.toFixed(10);
        answer = parseFloat(answer);
        if ( dividedByZero === 1) { 
            clearAll();
            document.getElementById("answer").innerHTML =  "ERROR";}
        else
        {
            document.getElementById("answer").innerHTML =  answer ;
            input = answer;
            numberDisplay = [];
         }


    }
    const add = (input)=>{
        numberDisplay.push(input);
    }
    const clearAll = () =>{
        numberDisplay = [];
        input = 0;
        document.getElementById("answer").innerHTML = "0";
    }
  
    const numericButton = (arg)=>{
        if ( document.getElementById("answer").innerHTML ===  "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != "."))
          { document.getElementById("answer").innerHTML = ""; }

        if (!(arg === ".") || !input.match(/[.]/)) {

        input += arg;
        document.getElementById("answer").innerHTML += arg;}


    }
    const operatorButton = (arg)=>{
          if (input !== 0 && input !== "-") {
              input = parseFloat(input);
              add(input);
              add(arg);
              document.getElementById("answer").innerHTML +=arg;
              input = 0;

          }
          if (arg == "-"  && isNaN(numberDisplay[0]) && input !== "-")
          {input ="-";

              document.getElementById("answer").innerHTML = "-";

        }
}


   
    
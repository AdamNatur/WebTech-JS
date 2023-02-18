

result = prompt("Номер задачи");
result = +result;

switch(result) {
    case 1: 
        first_velocity = 36;
        second_velocity = first_velocity*1000/3600;
        
        console.log(first_velocity + " км/ч соответствует " + second_velocity + " м/с.")
        
        first_velocity = 20;
        second_velocity = first_velocity/1000*3600;
        console.log(first_velocity + " м/с соответствует " + second_velocity + " км/ч.")
        break
  
    case 2: 
      a = prompt("AB")
      b = prompt("BC")
      c = prompt("AC")

      a = +a;
      b = +b;
      c = +c;

      p = a+b+c;

      if (((a+b)>c) * ((c+b)>a) * ((a+c)>b)){
        console.log("треугольник существует")
        console.log("периметр = "+ p )
        console.log("площадь = " + Math.sqrt(p*(p-a)*(p-b)*(p-c)))
        console.log("соотношение = " + p/Math.sqrt(p*(p-a)*(p-b)*(p-c)))
        }
    else{
        console.log("треугольник не существует")
    }
      break

    case 3:
        number = 1.2;
        while((number % 1) > 0 | (number === NaN))
        {
            value = prompt("Введите число")
            number = +value;
        }

        i = 0

        while(i<=number){

            if (((i % 5) === 0) & (i!==0))
            {
                console.log(i + " fizz buzz")
            }
            if(i % 2 != 0){
                console.log(i + " buzz")
            }
            else{
                console.log(i + " fizz")
            }

            i++
        }
        
        break
    
    case 4:

        string = "";
        for(i = 1; i <= 12; i++){

            if(i % 2 === 0){
                for(k = 1; k <= i; k++){
                    string +="#";
                }
                string +="\n"; 
            }
            else{
                for(k = 1; k <= i; k++){
                    string +="*";
                }
                string +="\n"; 
            }
        }  
        string += "||"
        console.log(string)  

        break

    case 5:

        a = 1355

        b = 5.45

        c = 37

        do{
            b = prompt("Введите число")
            b = +b

            c = b - a;

            if(c > 0){
                console.log("ваше число больше")
            }
            if(c < 0){
                console.log("ваше число меньше")
            }
        } while(c !== 0)


        console.log("Угадано")
        

        break
        

    case 6:
        
        n = 0
        x = 0
        y = 0

        while(x*y*n <= 0)
        {
            alert("Введите целые числа")
            n = prompt("Число")
            x = prompt("Возможный делитель 1")
            y = prompt("Возможный делитель 2")
            n = +n
            x = +x
            y = +y
        }

        if ((n % x === 0) & (n % y === 0)){

            check = true;
            console.log("n = " + n + ", x = " + x + ", y = " + y + " = " + check)
        }
        else{
            check = false;
            console.log("n = " + n + ", x = " + x + ", y = " + y + " = " + check)
        }

        break;

    case 7:

        month = 0;

        while(month < 1 | month > 12 | month === NaN)
        {
            alert("Задайте число от 1 до 12")
            month = prompt("Номер месяца")
            month = +month
        }

        if( month <= 3){
            quarter = 1;
        }
        if( month > 3 | month <= 6){
            quarter = 2;
        }
        if( month > 6 | month <= 9){
            quarter = 3;
        }
        if( month > 9 | month <= 12){
            quarter = 4;
        }

        console.log("месяц " + month + " => " + quarter + " квартал ")

        break

    default:
        result = prompt("Номер задачи", '');
      break
  }






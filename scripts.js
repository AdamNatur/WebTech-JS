

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
        
    default:
        result = prompt("Номер задачи", '');
      break
  }






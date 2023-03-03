
result= prompt(`Введите номер задачи`)
result = +result;

function convertSpeed(speed, convert){

    old_speed = speed;

    if (convert === "toKMH"){
        speed = speed*1000/3600;
    }
    if (convert === "toMS"){
        speed = speed/1000*3600;
    }

    console.log(`convertSpeed(${old_speed}, 'toMS') -> ${speed}`)
}

function absValue(value){

    let old_value = value;

    if(value < 0){
        value *=-1;
    }

    console.log(`absValue(${old_value}) -> ${value}`)
}

function randomNumber(min, max){
    console.log(`randomNumber(${min}, ${max}) -> ${Math.trunc(Math.random() * (max - min) + min)}`);
}

function randomArray(array, count)
    {
        random_array = [count];
        if(count <= array.length){
            for(k = 0; k < count; k++){

                random_array[k] = array[Math.trunc(Math.random()*array.length)];
                index = Math.random()*array.length;
            }
    
            console.log(`randomArray([${array}], ${count}) -> [${random_array}]`)
        }
        else
        {
            alert(error);
        }
        
    }



switch(result){

    case 1:
        convertSpeed(36, "toMS");
        convertSpeed(36, "toKMH");
        break;
        
    case 2:
        absValue(-2);
        absValue(100);
        break;

    case 3:
        let student = {
            group: 201,
            last_name: "Иванов",
            first_name: "Иван"
        }; 
        console.log(`Студент ${student.first_name } ${student.last_name} учится в ${student.group} группе`)  
        break
    
    case 4:
        randomNumber(0, 10);
        break
    
    case 5:

        randomArray([1,2,3 ,4 ,5], 3)
        break;
    default:
        break;    
}
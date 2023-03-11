
result = +prompt(`Введите номер задачи`)


let old_speed
let convert

function convertSpeed(speed, convert) {

    old_speed = speed;

    if (convert === "toKMH") {
        speed = speed * 1000 / 3600;
    }
    if (convert === "toMS") {
        speed = speed / 1000 * 3600;
    }

    return speed;
}


function absValue(value) {
    if (value < 0) {
        value = -value;
    }

    return value
}

function randomNumber(min, max) {

    return Math.trunc(Math.random() * (max - min) + min)
}

function randomArray(array, count) {
    const random_array = [count];

    let index;
    let old_index = -1

    if (count <= array.length) {
        for (k = 0; k < count; k++) {
            index = randomNumber(0, array.length-1);
            if (index != old_index) {
                random_array[k] = array[index];
                old_index = index;
            }
        }

        return random_array
    }
    else {
        alert(error);
    }

}



switch (result) {

    case 1:
        console.log(`convertSpeed(${36}, ${"toKMH"}) -> ${speed}`)
        console.log(`convertSpeed(${36}, ${"toMS"}) -> ${speed}`)
        break;

    case 2:
        console.log(`abs(-2) -> ${absValue(-2)}`);
        console.log(`abs(100) -> ${absValue(100)}`);
        break;

    case 3:
        let student = {
            group: 201,
            last_name: "Иванов",
            first_name: "Иван"
        };

        key = Object.keys(student)
        console.log(`Список свойств: ${key}`)
        console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`)
        break

    case 4:
        console.log(`randomNumber(0, 10) -> ${randomNumber(0, 10)}`);
        break

    case 5:

        array = [1, 2, 3, 4, 5]
        count = 3
        console.log(`randomArray([${array}], ${count}) -> [${randomArray(array, count)}]`)
        break;
    default:
        break;
}
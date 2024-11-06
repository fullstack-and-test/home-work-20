console.log("#3. JavaScript homework example file");

/*
 * #1
 *
 * Створіть об'єкт userObj, що описує людину.
 *
 * Наступні поля обов'язкові:
 * firstName - будь-яке ім'я, рядок
 * lastName - будь-яке прізвище, рядок
 * age - будь-який вік, число
 */

const userObj = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
};
console.log(userObj);
document.write(`<br/> #1 Створіть об'єкт userObj, що описує людину <br/>`);
document.write(`${JSON.stringify(userObj)} <br/>`);

/*
 * #2
 *
 * Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.

 * Наприклад:
 * userObj.firstName ← 'John'
 * userObj.lastName  ← 'Smith'
 * userObj.fullName() → 'John Smith'.
 */

userObj.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

document.write(
  `<br/> #2 Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я <br/>`
);
console.log(userObj.fullName()); // John Smith
document.write(`${JSON.stringify(Object.keys(userObj))} <br/>`);
document.write(`${JSON.stringify(userObj.fullName())} <br/>`);

/*
 * #3
 *
 * Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
 *
 * Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
 *
 * При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором ||.
 */

document.write(
  `<br/> #3 Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр <br/>`
);

const defUpperStr = (text) => {
  const string =
    (typeof text === "string" && `${text}`.length > 0) ||
    typeof text === "number"
      ? text.toString()
      : "DEFAULT TEXT";

  return string.toUpperCase();
};

console.log(defUpperStr("My text")); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT

document.write(
  `defUpperStr("My text") => "MY TEXT": ${
    defUpperStr("My text") === "MY TEXT" ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `defUpperStr() => "DEFAULT TEXT": ${
    defUpperStr() === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `defUpperStr("") => "DEFAULT TEXT": ${
    defUpperStr("") === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `defUpperStr(null) => "DEFAULT TEXT": ${
    defUpperStr(null) === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr(undefined) => "DEFAULT TEXT": ${
    defUpperStr(undefined) === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr(true) => "DEFAULT TEXT": ${
    defUpperStr(true) === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr(false) => "DEFAULT TEXT": ${
    defUpperStr(false) === "DEFAULT TEXT" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr("true") => "TRUE": ${
    defUpperStr("true") === "TRUE" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr("false") => "FALSE": ${
    defUpperStr("false") === "FALSE" ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `defUpperStr(12345) => "12345": ${
    defUpperStr(12345) === "12345" ? "✅" : "🔴"
  } <br/>`
);

/*
 * #4
 *
 * Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
 * Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до результуючого масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор for.
 *
 * Наприклад:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

document.write(
  `<br/> #4 Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n. <br/>`
);

function evenFn(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

function checkArraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

console.log(evenFn(2)); // [2]
console.log(evenFn(10)); // [2, 4, 6, 8, 10]
console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

document.write(
  `evenFn(2) => []: ${checkArraysEqual(evenFn(2), [2]) ? "✅" : "🔴"} <br/>`
);
document.write(
  `evenFn(10) => [2, 4, 6, 8, 10]: ${
    checkArraysEqual(evenFn(10), [2, 4, 6, 8, 10]) ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `evenFn(10) => [2, 4, 6, 8, 10]: ${
    checkArraysEqual(evenFn(15), [2, 4, 6, 8, 10, 12, 14]) ? "✅" : "🔴"
  } <br/>`
);
document.write(
  `evenFn(20) => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]: ${
    checkArraysEqual(evenFn(20), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
      ? "✅"
      : "🔴"
  } <br/>`
);

document.write(
  `evenFn(0) => []: ${checkArraysEqual(evenFn(0), []) ? "✅" : "🔴"} <br/>`
);
document.write(
  `evenFn(-1) => []: ${checkArraysEqual(evenFn(-1), []) ? "✅" : "🔴"} <br/>`
);
document.write(
  `evenFn(-10) => []: ${checkArraysEqual(evenFn(-10), []) ? "✅" : "🔴"} <br/>`
);

/*
 * #5
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */

const weekFn = (n) => {
  if (!Number.isInteger(n) || n > 7 || n < 1) return null;
  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "Пʼятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return null;
  }
};

document.write(
  `<br/> #5 Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву <br/>`
);

console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null

document.write(
  `weekFn(1) => 'Понеділок': ${weekFn(1) === "Понеділок" ? "✅" : "🔴"} <br/>`
);

document.write(
  `weekFn(3) => 'Середа': ${weekFn(3) === "Середа" ? "✅" : "🔴"} <br/>`
);

document.write(
  `weekFn(7) => 'Неділя': ${weekFn(7) === "Неділя" ? "✅" : "🔴"} <br/>`
);

document.write(`weekFn(9) => null: ${weekFn(9) === null ? "✅" : "🔴"} <br/>`);
document.write(
  `weekFn(1.5) => null: ${weekFn(1.5) === null ? "✅" : "🔴"} <br/>`
);
document.write(
  `weekFn("2.5") => null: ${weekFn(2.5) === null ? "✅" : "🔴"} <br/>`
);

/*
 * #6
 *
 * створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 * При виконанні завдання допускається використовувати тільки тернарний оператор ?.
 * Використання операторів if, switch - заборонено.
 */
function ageClassification(n) {
  return n <= 0
    ? null
    : n <= 24
    ? "Дитинство"
    : n <= 44
    ? "Молодість"
    : n <= 65
    ? "Зрілість"
    : n <= 75
    ? "Старість"
    : n <= 90
    ? "Довголіття"
    : n <= 122
    ? "Рекорд"
    : null;
}

document.write(
  `<br/> #6 створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами... <br/>`
);

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     0 :", ageClassification(0)); // 0 : null
console.log("     1 :", ageClassification(1)); // 1 : Дитинство
console.log("    24 :", ageClassification(24)); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("    44 :", ageClassification(44)); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65)); // 65 : Зрілість
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : Старість
console.log("    75 :", ageClassification(75)); // 75 : Старість
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : Довголіття
console.log("    90 :", ageClassification(90)); // 90 : Довголіття
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
console.log("   122 :", ageClassification(122)); // 122 : Рекорд
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null

/* Блок тестирования, везде должны быть true: */
console.log("    -1 :", ageClassification(-1) === null); // -1 : null
console.log("     0 :", ageClassification(0) === null); // 0 : null
console.log("     1 :", ageClassification(1) === "Дитинство"); // 1 : Дитинство
console.log("    24 :", ageClassification(24) === "Дитинство"); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01) === "Молодість"); // 24.01 : Молодість
console.log("    44 :", ageClassification(44) === "Молодість"); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01) === "Зрілість"); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65) === "Зрілість"); // 65 : Зрілість
console.log("  65.1 :", ageClassification(65.1) === "Старість"); // 65.1 : Старість
console.log("    75 :", ageClassification(75) === "Старість"); // 75 : Старість
console.log(" 75.01 :", ageClassification(75.01) === "Довголіття"); // 75.01 : Довголіття
console.log("    90 :", ageClassification(90) === "Довголіття"); // 90 : Довголіття
console.log(" 90.01 :", ageClassification(90.01) === "Рекорд"); // 90.01 : Рекорд
console.log("   122 :", ageClassification(122) === "Рекорд"); // 122 : Рекорд
console.log("122.01 :", ageClassification(122.01) === null); // 122.01 : null
console.log("   150 :", ageClassification(150) === null); // 150 : null

document.write("Блок тестирования, везде должны быть true:<br/>");
document.write("    -1 :", ageClassification(-1) === null); // -1 : null
document.write("     0 :", ageClassification(0) === null); // 0 : null
document.write("     1 :", ageClassification(1) === "Дитинство"); // 1 : Дитинство
document.write("    24 :", ageClassification(24) === "Дитинство"); // 24 : Дитинство
document.write(" 24.01 :", ageClassification(24.01) === "Молодість"); // 24.01 : Молодість
document.write("    44 :", ageClassification(44) === "Молодість"); // 44 : Молодість
document.write(" 44.01 :", ageClassification(44.01) === "Зрілість"); // 44.01 : Зрілість
document.write("    65 :", ageClassification(65) === "Зрілість"); // 65 : Зрілість
document.write("  65.1 :", ageClassification(65.1) === "Старість"); // 65.1 : Старість
document.write("    75 :", ageClassification(75) === "Старість"); // 75 : Старість
document.write(" 75.01 :", ageClassification(75.01) === "Довголіття"); // 75.01 : Довголіття
document.write("    90 :", ageClassification(90) === "Довголіття"); // 90 : Довголіття
document.write(" 90.01 :", ageClassification(90.01) === "Рекорд"); // 90.01 : Рекорд
document.write("   122 :", ageClassification(122) === "Рекорд"); // 122 : Рекорд
document.write("122.01 :", ageClassification(122.01) === null); // 122.01 : null
document.write("   150 :", ageClassification(150) === null); // 150 : null
/*
 * #7
 *
 * Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу.
 * Функція повинна повернути масив, що складається тільки з непарних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти в результуючий масив,
 * цикл має працювати до n включно,
 * дозволено тільки оператор while.
 *
 * Наприклад:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */

document.write(
  `<br/><br/> #7 Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу... <br/>`
);

function oddFn(n) {
  const result = [];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      result.push(i);
    }
    i++;
  }

  return result;
}

console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

document.write(
  `oddFn(10) => [1, 3, 5, 7, 9]: ${
    checkArraysEqual(oddFn(10), [1, 3, 5, 7, 9]) ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `oddFn(15) => [1, 3, 5, 7, 9, 11, 13, 15]: ${
    checkArraysEqual(oddFn(15), [1, 3, 5, 7, 9, 11, 13, 15]) ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `oddFn(20) => [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]: ${
    checkArraysEqual(oddFn(20), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
      ? "✅"
      : "🔴"
  } <br/>`
);

document.write(
  `oddFn(0) => []: ${checkArraysEqual(oddFn(0), []) ? "✅" : "🔴"} <br/>`
);

document.write(
  `oddFn(-10) => []: ${checkArraysEqual(oddFn(-10), []) ? "✅" : "🔴"} <br/>`
);

/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

// function mainFunc(a, b, cb) { }

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до ступеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */

// cbRandom(a, b) - обчислює і повертає довільне ціле число в діапазоні між a і b включно.
// function cbRandom(min, max) { }

// cbPow(a, b) - обчислює і повертає результат піднесення числа a у ступінь b.
// function cbPow(num, pow) { }

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
// function cbAdd(a, b) { }

/*
 * mainFunc() повинна повертати результат роботи переданої їй поворотної функції, наприклад:
 * mainFunc(2, 5, cbRandom) → випадково від 2 до 5 включно
 * mainFunc(10, 30, cbRandom) → випадково 10..30 включно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
// console.log(mainFunc(2, 5, cbPow)) // 32
// console.log(mainFunc(2, 5, cbAdd)) // 7
// console.log(mainFunc(2, 5, 'not a func')) // false

document.write(
  `<br/> #8 Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри <br/>`
);

function mainFunc(a, b, cb) {
  if (typeof cb !== "function") return false;

  return cb(a, b);
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, "not a func")); // false

document.write(
  `mainFunc(2, 5, cbRandom) повертає цілі числа в діапазоні 2..5 => ${mainFunc(
    2,
    5,
    cbRandom
  )} ${
    mainFunc(2, 5, cbRandom) >= 2 && mainFunc(2, 5, cbRandom) <= 5 ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `mainFunc(2, 5, cbPow) => 32 ${
    mainFunc(2, 5, cbPow) === 32 ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `mainFunc(2, 5, cbAdd) => 7 ${
    mainFunc(2, 5, cbAdd) === 7 ? "✅" : "🔴"
  } <br/>`
);

document.write(
  `mainFunc(2, 5, "not a func") => false ${
    mainFunc(2, 5, "not a func") === false ? "✅" : "🔴"
  } <br/>`
);

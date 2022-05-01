//  todo Типи даних
/*
 * Щоб дізнатися про тип змінної JavaScript, ми можемо використовувати оператор typeof.

 * String - є серією символів і записується в лапках. Рядок можна уявити в одинарних або подвійних лапках.

 * Number - є числом і може бути записано з десятковими знаками або без них.

 * BigInt - використовується для зберігання чисел, що перевищують обмеження типу даних Number. Він може зберігати великі цілі числа та представлений додаванням «n» до цілісного літерала.

 * Boolean - є логічною сутністю і може мати тільки два значення: істина або брехня. Логічні значення зазвичай використовуються для умовного тестування

 * Undefined - коли змінна оголошена, але не призначена, вона має значення undefined і її тип також не визначений.

 * Null - представляє неіснуюче чи неприпустиме значення.

 * Symbol - це новий тип даних, що представлений у версії JavaScript для ES6. Він використовується для зберігання анонімного та унікального значення.

 * Object - використовується для зберігання колекції даних. Важливо пам'ятати, що будь-який тип даних, який не є примітивним типом даних, відноситься до типу об'єкта в JavaScript.

 * Function - спеціальний випадок, що спрощує визначення типу Функцій, незважаючи на те, що всі функції конструктивно успадковані від Object.
 */

// typeof 3.14; // вертає "number"

// typeof true; // вертає "boolean"

// typeof 234567890123456789012345678901234567890n; // вертає bigint

// typeof undefined; // вертає undefined

// typeof null; // вертає "object"

// typeof Symbol('symbol'); // вертає символ

// console.log('ё'.charCodeAt(0));
// console.log('Ё'.charCodeAt(0));
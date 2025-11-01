//Dates in JavaScript are used to work with dates and times. The Date object provides various methods to create, manipulate, and format dates.

//Creating a new date object with the current date and time
let date = new Date();
console.log("Current Date and Time :- "+ date)//current date and time

console.log("Get Full Year :- "+ date.getFullYear())//get full year
console.log("Get Month :- "+ (date.getMonth()+1))//get month (0-11)
console.log("Get Date :- "+ date.getDate())//get date (1-31)
console.log("Get Day :- "+ date.getDay())//get day (0-6)
console.log("Get Hours :- "+ date.getHours())//get hours (0-23)
console.log("Get Minutes :- "+ date.getMinutes())//get minutes (0-59)
console.log("Get Seconds :- "+ date.getSeconds())//get seconds (0-59)
console.log("Get Milliseconds :- "+ date.getMilliseconds())//get milliseconds (0-999)
console.log("Get Time :- "+ date.getTime())//get time in milliseconds since Jan 1, 1970

//Creating specific date
let specificDate = new Date('2022-12-25T10:30:00');
console.log("Specific Date :- "+ specificDate)

//Setting date components
specificDate.setFullYear(2023);
specificDate.setMonth(11); // December (0-11)
specificDate.setDate(31);
specificDate.setHours(23);
specificDate.setMinutes(59);
specificDate.setSeconds(59);
console.log("Updated Specific Date :- "+ specificDate)

// ----------------------------------------------------------------------------
// | Method                | Description                          | Example Output            |
// | --------------------- | ------------------------------------ | ------------------------- |
// | `new Date()`          | Current date and time                | `2024-06-15T12:34:56.789Z` |
// | `getFullYear()`       | Get year                             | `2024`                    |
// | `getMonth()`          | Get month (0-11)                     | `5` (June)                |
// | `getDate()`            | Get day of month (1-31)              | `15`                      |
// | `getDay()`            | Get day of week (0-6)                | `6` (Saturday)            |
// | `getHours()`          | Get hours (0-23)                     | `12`                      |
// | `getMinutes()`        | Get minutes (0-59)                   | `34`                      |
// | `getSeconds()`        | Get seconds (0-59)                   | `56`                      |
// | `getMilliseconds()`   | Get milliseconds (0-999)             | `789`                     |
// | `getTime()`           | Get time in milliseconds since 1970  | `1718430896789`           |
// | `new Date('2022-12-25T10:30:00')` | Create specific date         | `2022-12-25T10:30:00.000Z` |
// | `setFullYear(2023)`  | Set year                             | Updates year to `2023`     |
// | `setMonth(11)`       | Set month (0-11)                     | Updates month to December  |
// | `setDate(31)`        | Set day of month (1-31)              | Updates day to `31`        |
// | `setHours(23)`       | Set hours (0-23)                     | Updates hours to `23`      |
// | `setMinutes(59)`     | Set minutes (0-59)                   | Updates minutes to `59`    |
// | `setSeconds(59)`     | Set seconds (0-59)                   | Updates seconds to `59`    |
// -----------------------------------------------------------------------------        
//let date = new Date();    
//let specificDate = new Date('2022-12-25T10:30:00');
// -----------------------------------------------------------------------------    
// Example Outputs may vary based on the current date and time when the code is executed.
// -----------------------------------------------------------------------------
//let date = new Date();    
//let specificDate = new Date('2022-12-25T10:30:00');

let myCreateDate = new Date('2023-03-15T09:45:00');
console.log("My Created Date :- "+ myCreateDate)//my created date   
console.log("Get Full Year of My Created Date :- "+ myCreateDate.getFullYear())//get full year
console.log("Get Month of My Created Date :- "+ (myCreateDate.getMonth()+1))//get month
console.log("Get Date of My Created Date :- "+ myCreateDate.getDate())//get date
console.log("Get Day of My Created Date :- "+ myCreateDate.getDay())//get day
console.log("Get Hours of My Created Date :- "+ myCreateDate.getHours())//get hours
console.log("Get Minutes of My Created Date :- "+ myCreateDate.getMinutes())//get minutes
console.log("Get Seconds of My Created Date :- "+ myCreateDate.getSeconds())//get seconds
console.log("Get Time of My Created Date :- "+ myCreateDate.getTime())//get time in milliseconds since Jan 1, 1970

//Setting date components of myCreateDate
myCreateDate.setFullYear(2024);
myCreateDate.setMonth(5); // June (0-11)
myCreateDate.setDate(20);
myCreateDate.setHours(15);
myCreateDate.setMinutes(30);
myCreateDate.setSeconds(45);
console.log("Updated My Created Date :- "+ myCreateDate)    
//Updated my created date   
// ----------------------------------------------------------------------------
// | Method                | Description                          | Example Output            |
// | --------------------- | ------------------------------------ | ------------------------- |
// | `new Date('2023-03-15T09:45:00')` | Create specific date         | `2023-03-15T09:45:00.000Z` |
// | `getFullYear()`       | Get year                             | `2023`                    |
// | `getMonth()`          | Get month (0-11)                     | `2` (March)               |
// | `getDate()`            | Get day of month (1-31)              | `15`                      |
// | `getDay()`            | Get day of week (0-6)                | `3` (Wednesday)           |
// | `getHours()`          | Get hours (0-23)                     | `9`                       |
// | `getMinutes()`        | Get minutes (0-59)                   | `45`                      |
// | `getSeconds()`        | Get seconds (0-59)                   | `0`                       |
// | `getTime()`           | Get time in milliseconds since 1970  | `1678875900000`           |
// | `setFullYear(2024)`  | Set year                             | Updates year to `2024`     |
// | `setMonth(5)`       | Set month (0-11)                     | Updates month to June      |
// | `setDate(20)`        | Set day of month (1-31)              | Updates day to `20`        |
// | `setHours(15)`       | Set hours (0-23)                     | Updates hours to `15`      |
// | `setMinutes(30)`     | Set minutes (0-59)                   | Updates minutes to `30`    |
// | `setSeconds(45)`     | Set seconds (0-59)                   | Updates seconds to `45`    |
// -----------------------------------------------------------------------------        
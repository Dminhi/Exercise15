// Viết hàm kiểm tra số lượng ký tự mật khẩu,
// nếu mật khẩu nhập vào ngắn hơn 8 ký tự thì in ra là “Mật khẩu không được ngắn hơn 8 ký tự),
//  nếu mật khẩu nhập lớn hơn 8 ký tự thì in ra nội dung “Đăng ký tài khoản thành công”

// let passWord = [prompt("")];
// let lengPassWord = passWord.length;
// const checkPass = (lengPassWord) => {
//   if (lengPassWord > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };
// if (checkPass(lengPassWord)) {
//   console.log("Mật khẩu không ngắn hơn 8 ký tự");
// } else {
//   console.log("Đăng ký tài khoản thành công");
// }

//  Tìm hiểu cách để chặn việc nhập ngày tháng năm bé hơn ngày hiện tại

// let time = new Date();
// let inputTime = new Date("2023-12-1");
// console.log(inputTime);
// console.log(time > inputTime);

// Xây dựng một hàm nhập vào một chuỗi và một ký tự bất kỳ,
//  giá trị trả ra là một chuỗi mới có ký tự vừa nhập vào sẽ là một chữ cái in hoa.
//  Ví dụ: Nhập chuỗi “lâm xấu trai lắm” thành chuỗi “Lâm xấu trai Lắm”. Ví dụ convert(“L”,“lâm xấu trai lắm” )

// let string = prompt("");
// let upperCaseWork = prompt("");
// const convert = (string, upperCaseWork) => {
//   let convertString = "";

//   for (i = 0; i < string.length; i++) {
//     if (string[i] == upperCaseWork) {
//       convertString += string[i].toUpperCase();
//     } else {
//       convertString += string[i];
//     }
//   }
//   return convertString;
// };
// console.log(convert(string, upperCaseWork));

// Xây dựng hàm chuyển đổi từ độ C sang độ F và ngược lại từ độ F sang độ C.
//  Tạo hàm convertTemperature nhận vào 3 tham số, tham số 1 là giá trị cần chuyển đổi,
//   tham số 2 là đơn vị gốc (có thể là độ C hoặc độ F)
//  , tham số 3 là giá trị chuyển đổi qua ( có thể là độ F hoặc độ C)

// let fromUnit = prompt("");
// let toUnit = prompt("");
// let Temperature = +prompt("Nhập nhiệt độ");
// const convertTemperature = (fromUnit, toUnit, Temperature) => {
//   if (fromUnit === "C" && toUnit === "F") {
//     return (Temperature * 9) / 5 - 32;
//   } else if (fromUnit === "F" && toUnit === "C") {
//     return ((Temperature - 32) * 5) / 9;
//   } else {
//     console.log("Mời nhập số khác");
//     return;
//   }
// };

// console.log(convertTemperature(fromUnit, toUnit, Temperature));

// let string = prompt("Mời nhập đoạn văn");

// let countWord = prompt("Mời nhập chữ cần đếm");

// const countWordRely = (string, countWord) => {
//   let number = 0;
//   for (i = 0; i < string.length; i++) {
//     if (string[i] === countWord) {
//       number += 1;
//     }
//   }
//   return number;
// };
// console.log(countWordRely(string, countWord));

// let number = [5, 342, 32, 3232, 55];
// const reverseNumber = (number) => {
//   number.sort((a, b) => {
//     return a - b;
//   });
//   return number;
// };
// let number1 = reverseNumber(number);
// console.log(number1[number1.length - 1]);

// let number = prompt();
// const reverseNumber = (number) => {
//   let reverseNumber1 = number.split("").reverse().join("");
//   return reverseNumber1;
// };

// console.log(reverseNumber(number));

// let number = prompt();
// let value = prompt();
// const findIndex = (number, value) => {
//   for (i = 0; i < number.length; i++) {
//     if (number[i] == value) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(findIndex(number, value));

let number = prompt();
let filterNumber = prompt();
const filter = (number, filterNumber) => {
  for (i = 0; i < number.length; i++) {
    if (number[i] == filterNumber) {
    }
  }
};

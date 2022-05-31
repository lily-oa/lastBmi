"use strict";

//宣告變數 
var height = document.querySelector('.height');
var weight = document.querySelector('.weight');
var calculate = document.querySelector('.calculate');
var records = document.querySelector('.records');
var deleteAll = document.querySelector('.deleteAll');
var assessResult = document.querySelector('.assessResult'); //評詁結果文字

var contentLen = 5; //每頁最多5筆資料

var data = JSON.parse(localStorage.getItem('bodyIndex')) || []; //-------------- 關於頁數的設定 ------------------------------------------------

var totalPages = Math.ceil(data.length / contentLen); //取整數回傳回來(向上捨入)

var page = document.querySelector('.page'); // 設定監聽事件

calculate.addEventListener('click', calculateBMI); // records.addEventListener('click', deleteRecords);
// deleteAll.addEventListener('click', deleteAllRecords);
// page.addEventListener('click', switchPage);  //切換頁面
//網頁載入後預先執行第一頁內容
// updateRecords(data, 1);
// pageColor(1);
//點擊計算按鈕觸發

function calculateBMI() {
  var heightAlert = document.querySelector('.heightAlert');
  var weightAlert = document.querySelector('.weightAlert'); //先判斷內容是否為空或負數

  heightAlert.textContent = '';
  weightAlert.textContent = '';

  switch (true) {
    case height.value < 0:
      heightAlert.textContent = '數字不可為負數';
      return;

    case weight.value < 0:
      weightAlert.textContent = '數字不可為負數';
      return;

    case height.value === '' && weight.value !== '':
      heightAlert.textContent = '請填上你的身高(cm)';
      return;

    case weight.value === '' && height.value !== '':
      weightAlert.textContent = '請填上你的體重(kg)';
      return;

    case height.value == '' && weight.value == '':
      heightAlert.textContent = '請填上你的身高(cm)';
      weightAlert.textContent = '請填上你的體重(kg)';
      return;
  }

  var cm = parseFloat(height.value).toFixed(1); //取到小數第一位

  var m = parseFloat((cm / 100).toFixed(2)); //取到小數第二位

  var kg = parseFloat(weight.value);
  var BMI = parseFloat((kg / (m * m)).toFixed(1)); //取到小數第一位

  var assessment = '';
  var color = '';
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var today = month + '-' + date + '-' + year; //判斷BMI以及對應顏色
}
//# sourceMappingURL=all.js.map

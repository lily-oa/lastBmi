"use strict";

//宣告變數 
var height = document.querySelector('.height');
var weight = document.querySelector('.weight');
var calculate = document.querySelector('.calculate');
var records = document.querySelector('.records'); //記錄區塊ul

var deleteAll = document.querySelector('.deleteAll');
var assessResult = document.querySelector('.assessResult'); //評詁結果文字

var contentLen = 5; //每頁最多5筆資料，不容變動

var data = JSON.parse(localStorage.getItem('bodyIndex')) || []; //-------------- 關於頁數的設定 ------------------------------------------------

var totalPages = Math.ceil(data.length / contentLen); //取整數回傳回來(向上捨入)

var page = document.querySelector('.page'); //頁數的ul
// 設定監聽事件

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
  } //BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)


  var cm = parseFloat(height.value).toFixed(1); //取到小數第一位

  var m = parseFloat((cm / 100).toFixed(2)); //取到小數第二位，身高為公尺(m)

  var kg = parseFloat(weight.value);
  var BMI = parseFloat((kg / (m * m)).toFixed(1)); //取到小數第一位

  var assessment = '';
  var color = '';
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var today = month + '-' + date + '-' + year; //判斷BMI以及對應顏色

  switch (true) {
    case BMI < 18.5:
      assessment = '過輕';
      color = '#31BAf9';
      break;

    case BMI >= 18.5 && BMI < 24:
      assessment = '正常';
      color = '#86D73f';
      break;

    case BMI >= 24 && BMI < 27:
      assessment = '輕度過重';
      color = '#ff982d';
      break;

    case BMI >= 27 && BMI < 30:
      assessment = '過重';
      color = '#ff6c03';
      break;

    case BMI >= 30 && BMI < 35:
      assessment = '中度肥胖';
      color = '#ff5f03';
      break;

    case BMI >= 35:
      assessment = '重度肥胖';
      color = '#ff1200';
      break;
  } // 將資料寫入新的陣列並將推入Data物件中


  var BMIobject = {
    borderColor: color,
    assess: assessment,
    bmi: BMI,
    weight: kg,
    height: cm,
    currentDate: today
  };
  assessResult.textContent = BMIobject.assess;
  assessResult.style.color = BMIobject.borderColor;
  data.push(BMIobject); // 帶入總頁數是希望不管用戶目前在第幾頁，只要新增新的資料就會跳至最後一頁方便看新的記錄

  totalPages = Math.ceil(data.length / contentLen);
  updateRecords(data, totalPages);
  changeButton(BMIobject); //隱藏計算機按鈕

  calculate.style.display = 'none'; //更新LocalStorage的資料

  localStorage.setItem('bodyIndex', JSON.stringify(data));
} // 將資料渲染在內容上


function updateRecords(data, num1) {
  // 若是最大頁數為0，沒有資料，則清空物件以及內容。以防止剩最後一筆資料時按刪除鈕產生的錯誤
  if (num1 == 0) {
    data = [];
    localStorage.setItem('bodyIndex', JSON.stringify(data));
    updateRecords(data);
    return;
  }
}
//# sourceMappingURL=all.js.map

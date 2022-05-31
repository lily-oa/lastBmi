//宣告變數 
let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let calculate = document.querySelector('.calculate');
let records = document.querySelector('.records');
let deleteAll = document.querySelector('.deleteAll');
let assessResult = document.querySelector('.assessResult'); //評詁結果文字
const contentLen = 5; //每頁最多5筆資料
let data = JSON.parse(localStorage.getItem('bodyIndex')) || [];

//-------------- 關於頁數的設定 ------------------------------------------------
let totalPages = Math.ceil(data.length/contentLen); //取整數回傳回來(向上捨入)
let page = document.querySelector('.page');

// 設定監聽事件
calculate.addEventListener('click', calculateBMI);
// records.addEventListener('click', deleteRecords);
// deleteAll.addEventListener('click', deleteAllRecords);
// page.addEventListener('click', switchPage);  //切換頁面

//網頁載入後預先執行第一頁內容
// updateRecords(data, 1);
// pageColor(1);

//點擊計算按鈕觸發
function calculateBMI(){
  let heightAlert = document.querySelector('.heightAlert');
  let weightAlert = document.querySelector('.weightAlert');

//先判斷內容是否為空或負數
  heightAlert.textContent = '';
  weightAlert.textContent = '';
  switch(true){
    case height.value < 0 :
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
  
  let cm = parseFloat(height.value).toFixed(1); //取到小數第一位
  let m = parseFloat((cm/100).toFixed(2));      //取到小數第二位
  let kg = parseFloat(weight.value);
  let BMI = parseFloat((kg/(m*m)).toFixed(1));  //取到小數第一位
  let assessment = '';
  let color = '';
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth()+1;
  let date = time.getDate();
  let today = month+'-'+date+'-'+year;
//判斷BMI以及對應顏色

}
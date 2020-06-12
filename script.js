var  plannerContent = [];
var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));
console.log(getLocalStorageData)
var currentTime = moment().format("H");

var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
var currentTime = moment().format("H");

if (getLocalStorageData !== null) {
 plannerContent = getLocalStorageData;
 plannerContent.forEach(function(value){
   console.log(value.input-value.toString())
   //start here when starting more troubleshooting
   $('#' + value['input-id']).val(this)
  //  var textInput = $('#' + value['input-value'])
  //  textInput.textContent = value.inputValue
 })
}



$("button").click(function(event) {
  event.preventDefault();
  var container = $(this).parent().parent();  
  var inputValue = container.find("input").val();
  var inputId = container.find("input").attr("id");
  var textObj = {
    "input-id": inputId,
    "input-value": inputValue };
  
  if (textObj["input-value"] !== "") {
      
    plannerContent.push(textObj);
    localStorage.setItem("planner-items", JSON.stringify(plannerContent));
  }
});


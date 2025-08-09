var button = document.getElementById('button');
var input = document.getElementById('input');
var output = document.getElementById('output');

button.addEventListener('click', function() {
    var text = input.value;

    if (text === "") {
        alert("入力値が空です。");
        return;
    }
    
    output.textContent = text;
})
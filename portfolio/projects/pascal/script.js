window.addEventListener('load', function () {
    var htmlSpace = document.getElementById('triangle');
    var runs = 15;
    var beginarray = [0, 1, 0];
    var holder = [];
    var i;
    holder.push(calcNext(beginarray));

    for (i = 0; i < runs; i++) {
        holder.push(calcNext(holder[i]));
    }

    for (i = 0; i < holder.length; i++) {
        htmlSpace.innerHTML += "<div style='align-content: center'>" + holder[i] + "</div>";
    }

    function calcNext(array) {
        var resultArray = [0];
        for (var i = 1; i < array.length; i++) {
            resultArray.push(array[i] + array[i - 1]);
        }
        resultArray.push(0);
        return resultArray;
    }
});
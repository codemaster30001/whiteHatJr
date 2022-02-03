name_array=[];
 
function sumbit(){
    var name_1 = document.getElementById("name_1").value;
    var name_2 = document.getElementById("name_2").value;
    var name_3 = document.getElementById("name_3").value;
    var name_4 = document.getElementById("name_4").value;
    var name_5 = document.getElementById("name_5").value;
    
    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);
    name_array.push(name_5);

    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("sumbit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting() { name_array.sort(); console.log(name_array); document.getElementById("display_name").innerHTML = name_array; }
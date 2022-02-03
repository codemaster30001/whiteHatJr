name_of_student_array= [];

function submit() 
{
    var display_student = [];
    
    for ( j=1 ; j <=4;  j++  ){
        
        var student_name = document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        
        name_of_student_array.push(student_name)        
    }
    
    console.log(name_of_student_array);
    
    var length_array = name_of_student_array.length;
    
    for ( var k=0; k<length_array; k++){
        
        display_student.push("<h4>NAME-"+ name_of_student_array[k] + "</h4>");
        
        
        
    }
    
    document.getElementById("display_name_with_commas").innerHTML= display_student;
    
    var remove_comma= display_student.join(" ");
document.getElementById("display_name_without_commas").innerHTML= remove_comma;
    
     document.getElementById("sumbit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}

function sorting(){
    
    name_of_student_array.sort();
    
    var sorted_array=[];
        var length_sorted = name_of_student_array.length;
 
    for ( var k=0; k<length_sorted; k++){
        
        sorted_array.push("<h4>NAME-"+ name_of_student_array[k] + "</h4>");
                    
    }
    
    var remove_comma= display_student.join(" ");
document.getElementById("display_name_without_commas").innerHTML= remove_comma;
    
}
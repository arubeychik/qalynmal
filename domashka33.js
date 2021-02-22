function count() {
    var result = 500;
    var education = String(document.getElementById("education").value);
    
    if(!education.localeCompare("bachelor")) {
        result *= 1.5;
    } else if(!education.localeCompare("college")) {
        result *= 1.2;
    } else if(!education.localeCompare('high_school')) {
        result *= 1.05;
    } else {
        result *= 0.9;
    }
    console.log(result);
    var net_worth = String(document.getElementById("worth").value);
    
    if(!net_worth.localeCompare("upper_class")) {
        result *= 2;
    } else if(!net_worth.localeCompare("middle_class")) {
        result *= 1.5;
    } else if(!net_worth.localeCompare("lower_class")){
        result *= 1.2;
    }

    console.log(result);
    
    
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('skillCheckbox');
    for(var i=0; i<4; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           if(!checkedValue.localeCompare('dombra')) {
            result += 100;
           } else if(!checkedValue.localeCompare('cook')) {
            result += 200;
           } else if(!checkedValue.localeCompare('character')) {
            result += 150;
           } else if(!checkedValue.localeCompare('sings')) {
            result += 100;
           }
      }
    }
    console.log(result);
    
    var age = document.getElementsByName('age');
    for (i = 0; i < 3; i++) {
      if (age[i].checked) {
        if(!age[i].value.localeCompare('age1')) {
            result *= 1.5;
        } else if(!age[i].value.localeCompare('age2')) {
            result *= 1.2;
        } else if(!age[i].value.localeCompare('age3')) {
            result *= 0.95;
        }
      }
    }
    console.log(result);
    var inputElements = document.getElementsByClassName('repoCheckbox');
    for(var i=0; i<3; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           if(!checkedValue.localeCompare('parent')) {
            result *= 0.85;
           } else if(!checkedValue.localeCompare('character')) {
            result *= 0.9;
           } else if(!checkedValue.localeCompare('person')) {
            result -= 200;
           } 
      }
    }

    console.log(result);
    
    document.getElementById("final").innerHTML = "Final price " + Math.ceil(result)
  }
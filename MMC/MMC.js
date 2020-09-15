let weight = 200;
let height = 1.5;
let BMI = weight/height**2
console.log(BMI)
    if(BMI < 18.5){
        console.log("Underweight")
    }
        
    else if(BMI <= 24.9){
        console.log("Normal weight")
    }
        
    else if(BMI <=29.9){
        console.log('Overweight')
    }
        
    else{
        console.log("Obesity");
    }
const form = document.querySelector("form");
form.addEventListener("submit", function(c){
    c.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const results = document.querySelector("#result");
    if (height === '' || isNaN(height) ||  height<0) {
        results.innerHTML =`Please enter a valid value`;
    }
    else if (weight === '' || isNaN(weight) || weight<0) {
        results.innerHTML=`Please enter a valid value`;
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
        if ( bmi < 18.6 ) {
            results.innerHTML=`${bmi} : You are Underweight `;
        } else if ( 18.6 <= bmi < 24.9 ) {
            results.innerHTML=`${bmi} : You are in Normal range `;
        } else{
            results.innerHTML=`${bmi} : You are overweight `;
          }
        
    }
});
    
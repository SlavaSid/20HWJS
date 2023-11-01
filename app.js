
const url = 'https://open.er-api.com/v6/latest/USD';

const   input = document.querySelector('input'),
        select = document.querySelector('select'),
        course = document.querySelector('.course');



const renderCourse = (currency) => {
  //console.log(currency.rates);
  input.addEventListener('keyup', () => {
    course.textContent = (input.value * currency.rates[select.value]).toFixed(2)
  //console.log(input.value);
  //console.log(select.value);
});
select.addEventListener('change', () => {
    course.textContent = (input.value * currency.rates[select.value]).toFixed(2)
   
})
}


       

const newFunc = async () => {
    try{
    const response = await fetch(url); 
    if(!response.ok){
    throw new Error ('статус-код не 200');
    }
    const info = await response.json();
    //console.log(info);
    renderCourse (info);
    } catch (error) {
        console.error(error.message);
        }
};



newFunc();
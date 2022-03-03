function sumvalue()
{
    var number1,number2,result; 
    number1=Number(document.formcalc.num1.value);
    number2=Number(document.formcalc.num2.value);
    result=number1+number2;
    document.formcalc.res.value=result;
}

function substraction()
{
    var number1,number2,result; 
    number1=Number(document.formcalc.num1.value);
    number2=Number(document.formcalc.num2.value);
    result=number1-number2;
    document.formcalc.res.value=result;
}

function multiplication()
{
    var number1,number2,result; 
    number1=Number(document.formcalc.num1.value);
    number2=Number(document.formcalc.num2.value);
    result=number1*number2;
    document.formcalc.res.value=result;
}

function divide()
{
    var number1,number2,result; 
    number1=Number(document.formcalc.num1.value);
    number2=Number(document.formcalc.num2.value);
    result=number1/number2;
    document.formcalc.res.value=result;
}

function remind()
{
    var number1,number2,result; 
    number1=Number(document.formcalc.num1.value);
    number2=Number(document.formcalc.num2.value);
    result=number1%number2;
    document.formcalc.res.value=result;
}

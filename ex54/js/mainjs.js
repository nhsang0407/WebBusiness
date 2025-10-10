function max(a,b,c,result)
{
    a = parseFloat(a); //chuyen tu string thanh so tu trai sang phai cho toi khi gap gia tri ko hop le
    b = parseFloat(b);//tra ve NaN khi bat dau ko phai la so
    c = parseFloat(c);
    //isNaN kiem tra xem 1 gia tri co phai la NaN ko
    if (isNaN(a) || isNaN(b) || isNaN(c)) 
    {
        result.value = "Invalid input";
        return;
    }

    result.value = Math.max(a, b, c);
}
function min(a,b,c,result)
{
    a=Number(a)
    b=Number(b)
    c=Number(c)
    //isFinite de kiem tra xem co phai la so hop le ko
    if (!isFinite(a) || !isFinite(b) || !isFinite(c)) 
    {
        result.value = "Invalid input";
        return;
    }
    result.value= Math.min(a,b,c)
}
function sin(a,result)
{
    a=Number(a)
    if (!isFinite(a))
    {
        result.value = "Invalid input";
        return;
    }
    result.value = Math.sin(a)
}
function cos(a,result)
{
    a=Number(a)
    if (!isFinite(a))
    {
        result.value = "Invalid input";
        return;
    }
    result.value = Math.cos(a)
}
function luy_thua(a,b,result)
{
    a=Number(a)
    b=Number(b)
    if (!isFinite(a) || !isFinite(b))
    {
        result.value = "Invalid input";
        return;
    }
    result.value = Math.pow(a,b)
}
var name_arr=["mahesh","joe","murali","john","pavan","jaswanth"];
for(var i=0;i<name_arr.length;i++)
{
    var c=name_arr[i].charAt(0).toLowerCase();
    if(c=='j')
    {
        console.log("Goodbye "+name_arr[i]);
    }
    else
    {
        console.log("Hello "+name_arr[i]);
    }
}
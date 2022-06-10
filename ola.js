function fare() {
    var k = document.getElementById("Bike1").value;
    var r = k * 5;
    console.log(r);
 document.getElementById("res").innerHTML = `Total Fare =${r}`;
    
    
}

function fare2()
{
    var k2 = document.getElementById("car1").value;
    var r2 = k2 * 15;
    document.getElementById("res2").innerHTML = ` Total Fare =${r2}`;
}

function fare3()
{
    var k3 = document.getElementById("auto1").value;
    var r3 = k3 * 10;
    document.getElementById("res3").innerHTML = `Total Fare =${r3}`;
}
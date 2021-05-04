/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    let shipName = document.getElementById('shippingName');
    let shipZip = document.getElementById('shippingZip');
    let checkbox = document.getElementById('same');
    
    let billName = document.getElementById('billingName');
    let billZip = document.getElementById('billingZip')

    if(checkbox.checked){
        billName.value = shipName.value
        billZip.value = shipZip.value
    }else{
        billName.value = '';
        billZip.value = '';
    }
     
    

}




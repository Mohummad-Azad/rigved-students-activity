function funCall(){

    var myArray =[
    {customerid: 12345, firstname: 'Sachin', lastname: 'Tendulakr', 
    address :{ state: 'maharastra', city: 'Mumbai'}},
    {customerid: 78945, firstname: 'Rahul', lastname: 'Dravid', 
    address :{ state: 'Karnataka', city: 'Kochi'}},
    {customerid: 42244, firstname: 'Azad', lastname: 'Sarkar',
    address: { state: 'Kolkata', city: 'Goa'}}
    
    ]
    var html = " <table border='1|1'>"

    setTimeout(() => {
        html+= '<th>';
        html+= '<tr>';
        html+= '<td>'+'CustomerId'+'</td>';
        html+= '<td>'+'FullName'+'</td>';
        html+= '<td>'+'State'+'</td>';
        html+= '<td>'+'City'+'</td>';
        html+= '</tr>';
        html+= '</th>';
    
       
        for (var i=0; i< myArray.length; i++){
            html+= '<tr>';
            html+= '<td>'+myArray[i].customerid+'</td>';
            html+= '<td>'+myArray[i].firstname+' '+myArray[i].lastname+'</td>';
            html+= '<td>'+myArray[i].address.state+'</td>';
            html+= '<td>'+myArray[i].address.city+'</td>';
            html+= '</tr>';
        }
     
        document.getElementById("table").innerHTML = html
    }, 500);
}

funCall()
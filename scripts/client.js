console.log('in JS');

$(readyNow);

function readyNow() {
    // console.log('readyNOw')

    // Event delegators
    $('body').on('click', '.deleteBtn', deleteInput);

    // Event handlers
    $('#submit').on('click', displayInputs);
}

let emp = [];
let monthly = 0;
let roundMon = monthly.toLocaleString("en-US");

function displayInputs() {
    
    
    let firstName = $('#f-name').val();
    let lastName = $('#l-name').val();
    let ids = $('#emp-id').val();
    let title = $('#emp-title').val();
    let annualSal = $('#salary').val();


    let newObj = {
        first: firstName,
        last: lastName,
        annSal: annualSal
    }

    emp.push(newObj);

    monthlyCalculation(emp);

    console.log("monthly:", monthly);

    

    // console.log(monthly);
    
   

    

    $('#data-table').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${ids}</td>
            <td>${title}</td>
            <td> 
                <span class="annual-sal">$${annualSal}</span>
            </td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        
    `)
    $('#f-name').val('');
    $('#l-name').val('');
    $('#emp-id').val('');
    $('#emp-title').val('');
    $('#salary').val('');

    $('#total').text(`
        Total Monthly: $${Math.ceil(monthly).toLocaleString("en-US")}
    `)
    // monthlyCalculation();
}



function deleteInput() {
    $(this).parent().parent().remove();
}

function monthlyCalculation() {
    // console.log('in monthlyCalculation');
    let sum = 0;
    for(let i = 0; i < emp.length; i++){
        sum += parseInt(emp[i].annSal);
    }
    
    monthly = sum /= 12;
    // let str = monthly.Intl.NumberFormat('en-US');
    
    if(monthly > 20000){
        $('.total-red').css('background-color', 'red');

    }
    
}


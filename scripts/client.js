console.log('in JS');

$(readyNow);

function readyNow() {
    // console.log('readyNOw')

    // Event delegators
    $('body').on('click', '.deleteBtn', deleteInput);
    $('body').on('click', '#submit', monthlyCalculation);

    // Event handlers
    $('#submit').on('click', displayInputs);
}

let emp = [];
let monthly = 0;

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

    // console.log("monthly:", monthly):

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
    
    if(monthly > 20000){
        $('.total-red').css('background-color', 'red');
        $('.total-red').css('border-radius', '3px');
        $('.total-red').css('padding', '18px', '18px');
        $('.total-red').css('width', 'max-content');

    }
    
}


console.log('in JS');

$(readyNow);

function readyNow() {
    console.log('readyNOw')
    $('#submit').on('click', displayInputs);
}

function displayInputs() {
    
    let firstName = $('#f-name').val();
    let lastName = $('#l-name').val();
    let ids = $('#emp-id').val();
    let title = $('#emp-title').val();
    let annualSal = $('#salary').val();


    $('#data-table').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${ids}</td>
            <td>${title}</td>
            <td>${annualSal}</td>
        </tr>
    `)
    $('#f-name').val('');
    $('#l-name').val('');
    $('#emp-id').val('');
    $('#emp-title').val('');
    $('#salary').val('');
}
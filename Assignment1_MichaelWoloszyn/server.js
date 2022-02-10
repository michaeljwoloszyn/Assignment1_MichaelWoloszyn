function setForm() {
    localStorage.setItem('Name', $('#n'));
    localStorage.setItem('Email', $('#e'));
    localStorage.setItem('Room', $('#r'));
    localStorage.setItem('Width', $('#w'));
    localStorage.setItem('Length', $('#l'));
    localStorage.setItem('Colour', $('#c'));
    localStorage.setItem('Paint', $('#p'));
    fillTable();
}

function fillTable() {
    var table = $('<table>');
    for (i = 0; i < 7; i++) {
        if (i == 0)
            localStorage.setItem('Name', $('#n'));
        if (i == 1)
            localStorage.setItem('Email', $('#e'));
        if (i == 2)
            localStorage.setItem('Room', $('#r'));
        if (i == 3)
            localStorage.setItem('Width', $('#w'));
        if (i == 4)
            localStorage.setItem('Length', $('#l'));
        if (i == 5)
            localStorage.setItem('Colour', $('#c'));
        if (i == 6)
            localStorage.setItem('Paint', $('#p'));
        var row = $('<tr>').text(JSON.stringify(result));
        table.append(row);
    }
    $('vtable').append(table);
}
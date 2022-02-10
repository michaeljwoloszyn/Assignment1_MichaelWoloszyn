function setForm() {
    localStorage.setItem('Name', $('#d'));
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
    var totalArea = localStorage.getItem("Width") * localStorage.getItem("Length");
    for (i = 0; i < 7; i++) {
        if (i == 0)
            result = localStorage.getItem('Name');
        if (i == 1)
            result = localStorage.getItem('Email');
        if (i == 2)
            result = localStorage.getItem('Room');
        if (i == 3)
            result = totalArea;
        if (i == 4)
            result = localStorage.getItem('Length');
        if (i == 5)
            result = localStorage.getItem('Colour');
        if (i == 6)
            result = localStorage.getItem('Paint');

        var row = $('<tr>').text(JSON.stringify(result));
        table.append(row);
    }
    $('vtable').append(table);
}
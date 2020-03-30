javascript:(function(){

// PAGE 1

if (document.querySelector('#UC1G01_F05')) {
    var chosen_checkboxes = document.querySelectorAll('#UC1G01_F06, #UC1G01_F2001, #UC1G01_F111, #UC1G01_F101, #UC1G01_F11_1, #UC1G01_F11_1_1, #UC1G01_F12, #UC1G01_F13');
    
    for (var check of chosen_checkboxes) {
        check.checked = true;
    }

    document.querySelector('#UC1G01_F05').value = '0';
    
    document.querySelector('#UC1G01_F07_Month').value = '03';
    document.querySelector('#UC1G01_F07_Day').value = '20';
    document.querySelector('#UC1G01_F07_Year').value = '2020';
    
    alert('Page 1 fields filled');
}

// PAGE 2

else if (document.querySelector('#UC1G04_F01')) {
    document.querySelector('#UC1G04_F01').value = 'first name';
    document.querySelector('#UC1G04_F03').value = 'last name';
    
    document.querySelector('#UC1G04_F08').value = '555555555';
    
    document.querySelector('#UC1G04_F09').value = '1';
    
    alert('Page 2 fields filled');
}

// PAGE 3

else if (document.querySelector('#UC1G07_F011')) {
    var chosen_checkboxes = document.querySelectorAll('#UC1G07_F011, #UC1G07_F01_1, #UC1G07_F02, #UC1G07_F02_1, #UC1G07_F02_1_1, #UC1G07_F03, #UC1G07_F04, #UC1G07_F04_1, #UC1G07_F04_2, #UC1G07_F04_2_1, #UC1G07_F04_2_2, #UC1G07_F05, #UC1G07_F06');
    
    for (var check of chosen_checkboxes) {
        check.checked = true;
    }
    
    alert('Page 3 fields filled');
}

// PAGE 4

else if (document.querySelector('#UC1G08_F071')) {
    var chosen_checkboxes = document.querySelectorAll('#UC1G08_F071, #UC1G08_F08, #UC1G08_F08_A0, #UC1G08_F08_B0, #UC1G08_F09, #UC1G08_F09_1, #UC1G08_F10, #UC1G08_F11, #UC1G08_F12, #UC1G08_F13, #UC1G08_F14');
    
    for (var check of chosen_checkboxes) {
        check.checked = true;
    }
    
    alert('Page 4 fields filled');
}

// PAGE 6

else if (document.querySelector('#UC1G10_F08P1')) {
    var chosen_checkboxes = document.querySelectorAll('#UC1G10_F13L');

    for (var check of chosen_checkboxes) {
        check.checked = true;
    }

    document.querySelector('#UC1G10_F08P1').value = '555';
    document.querySelector('#UC1G10_F08P2').value = '555';
    document.querySelector('#UC1G10_F08P3').value = '555';
    
    document.querySelector('#UC1G10_F09_Month').value = '03';
    document.querySelector('#UC1G10_F09_Day').value = '13';
    document.querySelector('#UC1G10_F09_Year').value = '2013';
    
    document.querySelector('#UC1G10_F17').value = 'job title';
    document.querySelector('#UC1G10_F18').value = '19';
    document.querySelector('#UC1G10_F19').value = 'job location';
    
    alert('Page 6 fields filled');
}

// PAGE 7

else if (document.querySelector('#UC1G05_F03')) {
    var chosen_checkboxes = document.querySelectorAll('#UC1G05_F15, #UC1G05_F35, #UC1G05_F40, #UC1G05_F411, #UC1G05_F421, #UC1G05_F441, #UC1G05_F43, #UC1G05_F45');
    
    for (var check of chosen_checkboxes) {
        check.checked = true;
    }
    
    document.querySelector('#UC1G05_F03').value = '555 Main St';
    document.querySelector('#UC1G05_F05').value = 'Syracuse';
    document.querySelector('#UC1G05_F06').value = 'NY';
    document.querySelector('#UC1G05_F07').value = '13203';
    document.querySelector('#UC1G05_F08').value = '2516';
    
    document.querySelector('#UC1G05_F34P1').value = '555';
    document.querySelector('#UC1G05_F34P2').value = '555';
    document.querySelector('#UC1G05_F34P3').value = '5555';
    
    document.querySelector('#UC1G05_F38').value = '14';
    
    document.querySelector('#UC1G05_F36').value = '3';
    document.querySelector('#UC1G05_F37').value = '6';
    document.querySelector('#UC1G05_F39').value = '2';
    document.querySelector('#UC1G05_F210').value = '0';
    
    alert('Page 7 fields filled');
}

else {
    alert('Page fields not detected');
}

})();
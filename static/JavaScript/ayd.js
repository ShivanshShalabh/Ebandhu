var totalq = 6;
var k = 0;
var m = 0;
var n = 0;
var g = 0;
var d = 0;
function init() {
    sessionStorage.setItem('a1', 'ans1yes');
    sessionStorage.setItem('a2', 'ans2yes');
    sessionStorage.setItem('a3', '3a');
    sessionStorage.setItem('a4', 'ans4yes');
    sessionStorage.setItem('a5', 'ans5yes');
    sessionStorage.setItem('a6', 'ans6yes');
}
$(document).ready(function () {
    $('.quiz').hide();
    $('#footerquiz2').hide();
    $('#results').hide();
    $('#footer2').hide();
    $('.quiz').hide();
    $('#quizstart').click(function () {
        $('.quiz').hide();
        $('#starting').hide();
        $('#q1').show();
        return false;
    });
    $('#q1 #next1').click(function () {
        verifya1();
        if (g == 1) {
            check('q1');
            $('.quiz').hide();
            $('#starting').hide();
            $('#q2').show();
            return false;
        }
    });

// If '#a1b' is checked, skip to function abc(), line 73

    $('#q2 #next2').click(function () {
        verifya2();
        if (g == 2) {
            check('q2');
            $('.quiz').hide();
            $('#q3').show();
            $('#starting').hide();
            return false;
        }
        return false;
    });
    $('#q3 #next3').click(function () {
        verifya3();
        if (g == 3) {
            check('q3');
            $('.quiz').hide();
            $('#q4').show();
            $('#starting').hide();
            return false;
        }
        return false;
    });
    $('#q4 #next4').click(function () {
        verifya4();
        if (g == 4) {
            check('q4');
            $('.quiz').hide();
            $('#q5').show();
            $('#starting').hide();
            return false;
        }
        return false;
    });
    $('#q5 #next5').click(function abc() { // Skip to this function if '#a1b' is selected.
        verifya5();
        if (g == 5) {
            check('q5');
            $('.quiz').hide();
            $('#q6').show();
            $('#starting').hide();
            return false;
        }
        return false;
    });
    $('#q6 #next6').click(function () {
        verifya6();
        if (g == 6) {
            check('q6');
            $('.quiz').hide();
            $('#starting').hide();
            $('#footer2').show();
            $('#results').show();
            finalresult();
            return false;
        }
        return false;
    });
});

// Evaluating answers 
function check(q) {
    if (q == "q1") {
        var submitted = $('input[name=ans1]:checked').val();
        if (submitted == sessionStorage.a1) {
            m++;
        }
        else {
            document.getElementById("r1").innerHTML = "&#9658 Please install Anti-virus/ Malware Software on your device.";
        }
    }
    if (q == "q2") {
        var submitted = $('input[name=ans2]:checked').val();
        if (submitted == sessionStorage.a2) {
            m++;
        }
        else {
            document.getElementById("r2").innerHTML = "&#9658 Please update your Anti-virus/Malware Software.";
        }
    }
    if (q == "q3") {
        var submitted = $('input[name=ans3]:checked').val();
        if (submitted == sessionStorage.a3) {
            m++;
        }
        else {
            document.getElementById("r3").innerHTML = "&#9658 Please run Anti-virus/ Malware test everyday.";
        }
    }
    if (q == "q4") {
        var submitted = $('input[name=ans4]:checked').val();
        if (submitted == sessionStorage.a4) {
            m++;
        }
        else {
            document.getElementById("r4").innerHTML = "&#9658 Please update your operating system in order to avoid cyber attacks.";
        }
    }
    if (q == "q5") {
        var submitted = $('input[name=ans5]:checked').val();
        if (submitted == sessionStorage.a5) {
            n++;
        }
        else {
            document.getElementById("r5").innerHTML = "&#9658 Please use strong  creditionals for your router in order to avoid cyber attacks.";
        }
    }
    if (q == "q6") {
        var submitted = $('input[name=ans6]:checked').val();
        if (submitted == sessionStorage.a6) {
            n++;
        }
        else {
            document.getElementById("r6").innerHTML = "&#9658 Please use VPN in order to prevent your data from hackers.";
        }
    }
    return false;
}

// Checking whether the radio button in checked
function verifya1() {
    if ($('#a1a')[0].checked) {
        g++;
    }
    else if ($('#a1b')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}
function verifya2() {
    if ($('#a2a')[0].checked) {
        g++;
    }
    else if ($('#a2b')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}
function verifya3() {
    if ($('#a3a')[0].checked) {
        g++;
    }
    else if ($('#a3b')[0].checked) {
        g++;
    }
    else if ($('#a3c')[0].checked) {
        g++;
    }
    else if ($('#a3d')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}
function verifya4() {
    if ($('#a4a')[0].checked) {
        g++;
    }
    else if ($('#a4b')[0].checked) {
        g++;
    }
    else if ($('#a4c')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}
function verifya5() {
    if ($('#a5a')[0].checked) {
        g++;
    }
    else if ($('#a5b')[0].checked) {
        g++;
    }
    else if ($('#a5c')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}
function verifya6() {
    if ($('#a6a')[0].checked) {
        g++;
    }
    else if ($('#a6b')[0].checked) {
        g++;
    }
    else {
        alert("Please choose your response.");
    }
}


// Showing end screen
function finalresult() {
    if (m + n == 6) {
        document.getElementById("rp").innerHTML = "You are safe :)";
    }
    else {
        document.getElementById("ra").innerHTML = "Please follow the following steps in order to prevent your device from the current most common cyber attacks-";
    }
}
window.addEventListener('load', init, false);
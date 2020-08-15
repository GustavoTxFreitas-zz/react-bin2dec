function Bin2Dec() {
    var dec = ok = i = 0;
    var bin = document.getElementById("input").value;
    for (i; i < bin.length; i++) {
        if (bin[i] != "0" && bin[i] != "1") {
            ok = 1;
            break;
        }
        dec = dec * 2 + parseInt(bin[i]);
    }
    document.getElementById("display")
        .innerText = ok == 0 ? dec : "non-binary";
}
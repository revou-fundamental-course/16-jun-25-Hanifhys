document.getElementById("hitung").addEventListener("click", function() {
    const alas = Number(document.getElementById("alas").value);
    const tinggi = Number(document.getElementById("tinggi").value);
    const luas = 0.5 * alas * tinggi;

    document.getElementById("input-alas").innerText = alas;
    document.getElementById("input-tinggi").innerText = tinggi;
    document.getElementById("output-luas").innerText = "L = " + luas;
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("input-alas").innerText = "90";
    document.getElementById("input-tinggi").innerText = "90";
    document.getElementById("output-luas").innerText = "L = 4050";
});


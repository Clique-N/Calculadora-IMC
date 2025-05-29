function calcularImc() {

    //Entrada

        let valorPeso = document.getElementById("peso").value;
        let valorAltura = document.getElementById("altura").value;

    //Processamento

        let valorTotal = (valorPeso / (valorAltura * valorAltura) );
        let imc;
        
        if (valorTotal <= 18.5 ){
                imc = "Abaixo do normal";
            } else if (valorTotal  <= 24.9){
                imc = "Normal";
            } else if (valorTotal  <= 29.9){
                imc = "Sobrepeso";
            } else if (valorTotal  <= 34.9){
                imc = "Obesidade Grau 1";
            } else if (valorTotal  <= 39.9){
                imc = "Obesidade Grau 2";
            } else {
                imc = "Obesidade Grau 3";
            }

    //Saída

        document.getElementById("resultado").textContent = "IMC: " + valorTotal.toFixed(2); //toFixed tem como função mostrar somente duas casa decimais apos a virgula.
        document.getElementById("imc").textContent = "Nível de IMC: " + imc;
}
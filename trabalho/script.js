function calcularTroco() {
 
    let valorPago = parseFloat(document.getElementById('Pagar').value);
    let precoProduto = parseFloat(document.getElementById('Produto').value);

   let troco = valorPago - precoProduto;

    if (troco >= 0) {
        document.getElementById('troco').innerHTML = "O seu troco R$" + troco.toFixed(2);
    } else {
        document.getElementById('troco').innerHTML = "Falta dinheiro aqui";
    }
}

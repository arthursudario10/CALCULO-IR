// Entrada de dados
let salarioBruto = parseFloat(prompt("Digite o seu salário bruto mensal (ex: 15000.00):"));

let imposto = 0;
let aliquota = "";

// Regras de cálculo (ordem correta)
if (salarioBruto < 5000) {
    imposto = 0;
    aliquota = "Isento";
} else if (salarioBruto <= 6500) {
    imposto = salarioBruto * 0.075;
    aliquota = "Alíquota de 7,5%";
} else if (salarioBruto <= 8000) {
    imposto = salarioBruto * 0.15;
    aliquota = "Alíquota de 15%";
} else {
    imposto = salarioBruto * 0.225;
    aliquota = "Alíquota de 22,5%";
}

// Cálculo do salário líquido
let salarioLiquido = salarioBruto - imposto;

// Saída
alert(
"--------------- Recibo de Pagamento ------------\n" +
"Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
"Alíquota aplicada: " + aliquota + "\n" +
"Desconto de IR: R$ " + imposto.toFixed(2) + "\n" +
"Salário Líquido: R$ " + salarioLiquido.toFixed(2)
);
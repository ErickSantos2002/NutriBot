// Redireciona para a página do formulário
function redirecionarParaFormulario() {
    window.location.href = "formulario.html";
}

// Validação do formulário e feedback ao usuário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("nutriForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita envio padrão

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (form.checkValidity()) {
            alert("Formulário enviado com sucesso! Em breve entraremos em contato.");
            form.reset(); // Reseta o formulário
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });
});

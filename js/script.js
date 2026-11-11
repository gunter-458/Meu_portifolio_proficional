// Exibe uma mensagem de exemplo ao enviar o formulário.
const formulario = document.getElementById('formContato');
if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    document.getElementById('aviso').textContent = 'Formulário preenchido! Este exemplo não envia os dados.';
    formulario.reset();
  });
}

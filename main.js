const form = document.getElementById('form-name');
const inputNomeContato = document.getElementById('name');
const inputNumeroTelefone = document.getElementById('phone');
const corpoTabela = document.getElementById('contatos-lista');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (inputNomeContato.value.trim() !== '' && inputNumeroTelefone.value.trim() !== '') {
        adicionarLinha();
        limpaInput();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function adicionarLinha() {
    let linha = '<tr>';
    linha += `<td class="contact-name">${inputNomeContato.value}</td>`;
    linha += `<td class="contact-phone">${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';
    corpoTabela.insertAdjacentHTML('beforeend', linha);
}

function limpaInput() {
    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

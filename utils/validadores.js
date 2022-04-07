const validarNome = (nome) => {
    return nome?.toString().length > 2;

}

const validarEmail = (email) => {
    emailStr = email?.toString();
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes ('.');
}

const validarSenha = (senha) => {
    return senha?.toString().length > 3;
}

const validarConfirmacaosenha = (senha, confirmacao) => {
    return validarSenha (senha) && senha === confirmacao;
} 

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaosenha
}

console.log(validarConfirmacaosenha('osam', 'ossam'));
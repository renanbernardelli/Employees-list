class ListaFuncionario {

    constructor() {
        this._listaFuncionario = [];
    }

    adicionaFuncionario(funcionario) {
        this._listaFuncionario.push(funcionario);
    }

    get listaFuncionario() {
        return [].concat(this._listaFuncionario);
    }
}
class FuncionarioController {

    constructor() {
        const $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputEndereco = $('#endereco');
        this._inputSalario = $('#salario');
        this._listaFuncionarios = new ListaFuncionario();
        this._funcionariosView = new FuncionariosView($('.lista-funcionarios'));

        this._funcionariosView.update(this._listaFuncionarios);
    }


    adiciona(event) {
        event.preventDefault();

        this._listaFuncionarios.adicionaFuncionario(this._criarFuncionario())

        this._funcionariosView.update(this._listaFuncionarios);
        
        this._limpaFormulario();

        console.log(this._listaFuncionarios.listaFuncionario);
        
    }

    _limpaFormulario() {
        document.querySelector('#form').reset();
        this._inputNome.focus();
    }

    _criarFuncionario() {
        new Funcionario(
            this._inputNome.value,
            this._inputEndereco.value,
            this._inputSalario.value
        );
    }
}
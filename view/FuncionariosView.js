class FuncionariosView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {
        return `
            ${model.listaFuncionario.map((funcionario) => {
                return `
                    <tr>
                        <td>
                            ${funcionario.nome}
                        </td>
                        <td>
                            ${funcionario.endereco}
                        </td>
                        <td>
                            ${funcionario.salario}
                        </td>
                    </tr>
                    `
        }).join('')}
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}
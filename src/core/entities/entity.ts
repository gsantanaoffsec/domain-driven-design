import { randomUUID } from "node:crypto"

export class Entity<Props>{

    // Não quero que nenhum arquivo da aplicação possa alterar o id da entidade
    // ou seja, coloca o id como private

    private _id: string

    // Propriedade que mantém referência a todos os campos da nossas entidades
    
    protected props: Props

    get id() {
        return this._id
    }

    constructor(props: Props, id?: string) {
        this.props = props
        this._id = id ?? randomUUID()

    }
}
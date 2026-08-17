// Core -> base do sistema, com regras e estruturas que podem ser usadas por vários domínios

import { UniqueEntityId } from './unique-entity-id'

export class Entity<Props> {
  // Não quero que nenhum arquivo da aplicação possa alterar o id da entidade
  // ou seja, coloca o id como private

  private _id: UniqueEntityId

  // Propriedade que mantém referência a todos os campos da nossas entidades

  protected props: Props

  get id() {
    return this._id
  }

  // Só pode ser chamado pela classe Entity ou pelas classes que HERDAM ele

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId(id)
  }
}

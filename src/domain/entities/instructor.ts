import { randomUUID } from 'node:crypto'

export class Instructor {
    public id: string
    public name: string

    // Se eu chamar o método constructor passando o id, quer dizer que eu to querendo
    // criar uma referência pra um instrutor que já existe na aplicação que tem AQUELE id
    // porém se eu não passar um id quer dizer que eu to querendo um instrutor do total zero 

    constructor(name: string, id?: string) {
        this.name = name
        this.id = id ?? randomUUID()
    }
}
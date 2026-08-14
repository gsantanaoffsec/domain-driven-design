import { Entity } from '../../core/entities/entity'

interface InstructorProps {
    name: string
}

export class Instructor extends Entity<InstructorProps>{

    // Se eu chamar o método constructor passando o id, quer dizer que eu to querendo
    // criar uma referência pra um instrutor que já existe na aplicação, que tem AQUELE id
    // porém se eu não passar um id quer dizer que eu to querendo CRIAR um instrutor do total zero 
    
}

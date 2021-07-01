import { EntitySchema } from 'typeorm'

export class Author {
  constructor(email, name, description) {
    this.email = email
    this.name = name
    this.description = description
  }
}

export const AuthorEntity = new EntitySchema({
  name: 'Author',
  tableName: 'authors',
  target: Author,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    email: {
      type: 'varchar',
      nullable: false,
    },
    name: {
      type: 'varchar',
      nullable: false,
    },
    description: {
      type: 'varchar',
      length: 400,
      nullable: true,
    },
  },
})

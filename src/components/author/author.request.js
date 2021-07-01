import { Author } from './author.entity'

class AuthorRequest {
  constructor({ email, name, description }) {
    this.email = email
    this.name = name
    this.description = description
  }

  toModel() {
    return new Author(this.email, this.name, this.description)
  }
}

export default AuthorRequest

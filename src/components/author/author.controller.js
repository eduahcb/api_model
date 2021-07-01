import { getRepository } from 'typeorm'
import AuthorRequest from './author.request'
import { Author } from './author.entity'

class AuthorController {
  constructor() {
    this.authorRepository = getRepository(Author)
  }

  create = async (req, res) => {
    const authorRequest = new AuthorRequest(req.body)
    const newAuthor = authorRequest.toModel()

    const author = await this.authorRepository.save(newAuthor)

    res.status(201).json(author)
  }
}

export default AuthorController

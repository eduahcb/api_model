import Joi from 'joi'

export default async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      description: Joi.string().max(400),
    })

    await schema.validateAsync(req.body)
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}

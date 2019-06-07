'use strict'

/**
 * Dependencies
 */

const Context = require('../models/Context')

/**
 * Define controller
 */

class ContextsController {
  static async all(req, res) {
    try {
      const contexts = await Context.all()

      res.status(200).json(contexts)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async create(req, res) {
    try {
      const [id] = await Context.create(req.body)

      const context = await Context.find(id)

      res.status(201).json(context)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async find(req, res) {
    try {
      const context = await Context.find(req.params.id)

      context.actions = await Action.all(req.params.id)

      res.status(200).json(context)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async update(req, res) {
    try {
      const count = await Context.update(req.params.id, req.body)

      if (count > 0) {
        const context = await Context.find(req.params.id)

        res.status(200).json(context)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async remove(req, res) {
    try {
      const count = await Context.remove(req.params.id)

      if (count > 0) {
        res.sendStatus(200)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }
}

/**
 * Export controller
 */

module.exports = ContextsController

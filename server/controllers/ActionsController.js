'use strict'

/**
 * Dependencies
 */

const Action = require('../models/Action')

/**
 * Define controller
 */

class ActionsController {
  static async all(req, res) {
    try {
      const actions = await Action.all(req.params.projects_id)

      res.status(200).json(actions)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async create(req, res) {
    try {
      req.body.projects_id = req.params.projects_id

      const [id] = await Action.create(req.body)

      const action = await Action.find(req.params.projects_id, id)

      res.status(201).json(action)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async find(req, res) {
    try {
      const action = await Action.find(req.params.projects_id, req.params.id)

      res.status(200).json(action)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async update(req, res) {
    try {
      const count = await Action.update(req.params.id, req.body)

      if (count > 0) {
        const action = await Action.find(req.params.projects_id, req.params.id)

        res.status(200).json(action)
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
      const count = await Action.remove(req.params.id)

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

module.exports = ActionsController

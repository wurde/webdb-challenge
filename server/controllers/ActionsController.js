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
      let actions = await Action.all()

      res.status(200).json(actions)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async create(req, res) {
    try {
      let action = await Action.create(req.body)

      res.status(201).json(action)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async find(req, res) {
    try {
      let action = await Action.find(req.params.id)

      res.status(200).json(action)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async update(req, res) {
    try {
      let count = await Action.update(req.params.id, req.body)

      res.status(200).json(count)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async remove(req, res) {
    try {
      let count = await Action.remove(req.params.id)

      res.status(200).json(actions)
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

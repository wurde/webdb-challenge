'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /projects
 */

router.route('/')
  .get((req, res) => {
    res.sendStatus(200)
  })
  .post((req, res) => {
    res.sendStatus(200)
  })

/**
 * Routes
 *   GET,PUT,DELETE /projects/:id
 */

router.route('/:id')
  .get((req, res) => {
    res.sendStatus(200)
  })
  .put((req, res) => {
    res.sendStatus(200)
  })
  .delete((req, res) => {
    res.sendStatus(200)
  })

/**
 * Middleware
 */

router.use('/:projects_id/actions', require('./actions_router'))

/**
 * Export router
 */

module.exports = router

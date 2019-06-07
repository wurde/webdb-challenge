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
 *   GET,POST /projects/:projects_id/actions
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
 *   GET,PUT,DELETE /projects/:projects_id/actions/:id
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
 * Export router
 */

module.exports = router

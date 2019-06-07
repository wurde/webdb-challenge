'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ActionsController = require('../controllers/ActionsController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /projects/:projects_id/actions
 */

router.route('/')
  .get(ActionsController.all)
  .post(ActionsController.create)

/**
 * Routes
 *   GET,PUT,DELETE /projects/:projects_id/actions/:id
 */

router.route('/:id')
  .get(ActionsController.find)
  .put(ActionsController.update)
  .delete(ActionsController.remove)

/**
 * Export router
 */

module.exports = router

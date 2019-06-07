'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ProjectsController = require('../controllers/ProjectsController')

/**
 * Define router
 */

const router = express.Router({ mergeParams: true })

/**
 * Routes
 *   GET,POST /projects
 */

router.route('/')
  .get(ProjectsController.all)
  .post(ProjectsController.create)

/**
 * Routes
 *   GET,PUT,DELETE /projects/:id
 */

router.route('/:id')
  .get(ProjectsController.find)
  .put(ProjectsController.update)
  .delete(ProjectsController.remove)

/**
 * Middleware
 */

router.use('/:projects_id/actions', require('./actions_router'))

/**
 * Export router
 */

module.exports = router

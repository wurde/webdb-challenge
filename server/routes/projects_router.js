'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ProjectsController = require('../controllers/ProjectsController')
const check_project_exists = require('../middleware/check_project_exists')

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
 * Middleware
 *   check_project_exists
 */

router.use('/:id', check_project_exists)

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

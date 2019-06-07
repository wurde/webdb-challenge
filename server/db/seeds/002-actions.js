'use strict'

exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {id: 1, projects_id: 1, description: 'Action A'},
        {id: 2, projects_id: 1, description: 'Action B'},
        {id: 3, projects_id: 2, description: 'Action C'}
      ]);
    });
};

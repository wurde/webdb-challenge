'use strict'

exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'Project X', description: 'Do thing X'},
        {id: 2, name: 'Project Y', description: 'Do thing Y'},
        {id: 3, name: 'Project Z', description: 'Do thing Z'}
      ]);
    });
};

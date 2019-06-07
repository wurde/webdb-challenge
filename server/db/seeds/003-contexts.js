'use strict'

exports.seed = function(knex, Promise) {
  return knex('contexts').del()
    .then(function () {
      return knex('contexts').insert([
        {id: 1, name: 'At home'},
        {id: 2, name: 'At work'},
        {id: 3, name: 'At computer'}
      ]);
    });
};

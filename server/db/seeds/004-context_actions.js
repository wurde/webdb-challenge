'use strict'

exports.seed = function(knex, Promise) {
  return knex('context_actions').del()
    .then(function () {
      return knex('context_actions').insert([
        {id: 1, contexts_id: 1, actions_id: 1},
        {id: 2, contexts_id: 1, actions_id: 2},
        {id: 3, contexts_id: 2, actions_id: 2},
        {id: 4, contexts_id: 2, actions_id: 3}
      ]);
    });
};

BEGIN TRANSACTIONS;

CREATE TABLE IF NOT EXISTS projects (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name text,
  description text,
  completed_at datetime,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  modified_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS actions (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  projects_id integer NOT NULL,
  description text,
  notes text,
  completed_at datetime,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  modified_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT fk_projects_id
    FOREIGN KEY (projects_id) REFERENCES projects (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS contexts (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  name text,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  modified_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS context_actions (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  contexts_id integer NOT NULL,
  actions_id integer NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  modified_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT uniq_contexts_id_actions_id
    UNIQUE (contexts_id, actions_id),
  CONSTRAINT fk_contexts_id
    FOREIGN KEY (contexts_id) REFERENCES contexts (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  CONSTRAINT fk_actions_id
    FOREIGN KEY (actions_id) REFERENCES actions (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);

END TRANSACTIONS;

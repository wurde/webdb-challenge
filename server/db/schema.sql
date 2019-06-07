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
  FOREIGN KEY (projects_id) REFERENCES projects (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

END TRANSACTIONS;

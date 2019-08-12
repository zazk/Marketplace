#!/bin/sh
printf "Starting Marketplace API Docker container...\n"
printf "Waiting for pg DB to come up...\n";

until ./scripts/wait-for.sh -t 4 postgres:5432
do
  sleep 1;
done
printf "DB up and running\n";
if [ -n "$DB_RESET" ]; then
  printf "\n* Rolling back Database Migrations *\n"
  # ./node_modules/.bin/knex migrate:rollback
fi
if [ -n "$DB_MIGRATE" ]; then
  printf "\n* Running Database Migrations *\n"
  # ./node_modules/.bin/knex migrate:latest
fi
if [ -n "$DB_SEED" ]; then
  printf "\n* Seeding Database *\n"
  # ./node_modules/.bin/knex seed:run
fi
printf "\n* Starting Application *\n\n"

/usr/src/pachama/marketplace/node_modules/.bin/nodemon src/server.js

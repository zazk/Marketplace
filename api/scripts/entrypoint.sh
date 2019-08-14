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
  yarn global add sequelize-cli
  #/usr/src/pachama/marketplace/node_modules/.bin/sequelize db:migrate:undo:all
  sequelize db:migrate:undo:all
fi
if [ -n "$DB_MIGRATE" ]; then
  printf "\n* Running Database Migrations *\n"
  sequelize db:migrate
fi
if [ -n "$DB_SEED" ]; then
  printf "\n* Seeding Database *\n"
  sequelize db:seed:all
fi
printf "\n* Starting Application *\n\n"

/usr/src/pachama/marketplace/node_modules/.bin/nodemon src/server.js

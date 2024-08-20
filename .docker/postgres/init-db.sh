#!/bin/bash
set -e

DB_EXISTS=$(psql -U "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname='$POSTGRES_DB'")

if [ -z "$DB_EXISTS" ]; then
    echo "Criando o banco de dados '$POSTGRES_DB'..."
    psql -U "$POSTGRES_USER" -c "CREATE DATABASE $POSTGRES_DB;"
else
    echo "O banco de dados '$POSTGRES_DB' já existe."
fi

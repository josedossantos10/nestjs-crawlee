FROM postgres:16 

RUN usermod -u 1000 postgres

COPY init-db.sh /docker-entrypoint-initdb.d/
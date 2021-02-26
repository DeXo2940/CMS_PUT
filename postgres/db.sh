#!/usr/bin/env bash

docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres -v /srv/put/cms:/data/db postgres:13.2

#!/usr/bin/nodejs
import app from '../app';
import config from '../environment/config';
import { postgresDB } from '../databases/postgres-db';

const port = config.port || 3000;

const start = async () => {
    // Initialize the database
    await postgresDB();

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

start();
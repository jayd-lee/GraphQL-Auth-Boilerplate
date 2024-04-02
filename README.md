# GraphQL Auth Boilerplate 
JWT Authentication boilerplate using [Apollo Server](https://www.apollographql.com/docs/)


## Setting Up

1. Clone the repository:

    ```bash
    git clone https://github.com/jayd-lee/GraphQL-Auth-Boilerplate
    ```

2. Create an `.env` file in the root directory:

    ```dotenv
    DATABASE_URL=
    DOCKER_COMPOSE_DATABASE=
    ```

3. Build and run the Docker containers:

    ```bash
    docker-compose up --build
    ```

## Configuration

- `docker-compose.yml`: Defines services for PostgreSQL and the backend server. Adjust ports and environment variables as needed.
- `Dockerfile`: Sets up the Docker container environment. Modify as required.
- `.env`: Contains environment variables for development. Ensure proper PostgreSQL connection details are provided.

Once the Docker containers are up and running, the Apollo Server will be available at `http://localhost:5001`.

## Development

To start the development server outside Docker:

1. Ensure PostgreSQL is running locally.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm start
    ```

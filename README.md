# techbase-code-challenge

Code Challenge for Backend developer

## Requirements

- Node v14.5.4
- MongoDB Server v4.4.3
- Yarn v1.22.10

## Configurations

| Variable                   | Default | Description                                                                                                                                                                                                                                                        |
| -------------------------- | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MONGO_URI                  |         | Mongo uri to connect to MongoDB database. Keep it in secret!                                                                                                                                                                                                       |
| PORT                       | 13.11.1 | The port number of the app                                                                                                                                                                                                                                         |
| NODE_ENV                   |         |                                                                                                                                                                                                                                                                    |
| isProduction               |  false  | The result of process.env.NODE_ENV === "production"                                                                                                                                                                                                                |
| GRAPHQL_MOCKS              |  false  | Mock your GraphQL data based on a schema.                                                                                                                                                                                                                          |
| GRAPHQL_MOCK_ENTIRE_SCHEMA |  true   | Keep existing resolvers when mock the schema.                                                                                                                                                                                                                      |
| ARGON2_MEMORY_COST         |  4096   | The amount of memory to be used by the hash function, in KiB. Each thread (see `ARGON2_PARALLELISM`) will have a memory pool of this size. Note that large values for highly concurrent usage will cause starvation and thrashing if your system memory gets full. |
| ARGON2_TIME_COST           |    3    | The time cost is the amount of passes (iterations) used by the hash function. It increases hash strength at the cost of time required to compute.                                                                                                                  |
| ARGON2_PARALLELISM         |    1    | The amount of threads to compute the hash on. Each thread has a memory pool with `ARGON2_MEMORY_COST` size. Note that changing it also changes the resulting hash.                                                                                                 |
| ARGON2_SALT_LENGTH         |   16    | The length (in bytes) of the cryptographically secure random salt to generate.                                                                                                                                                                                     |
| ARGON2_HASH_LENGTH         |   32    | The hash length is the length of the hash function output in bytes. Note that the resulting hash is encoded with Base 64, so the digest will be ~1/3 longer.                                                                                                       |

The **settings of argon2** depends on the power of the hardware system.
To get the recommended settings, run:

```shell
docker run -it --entrypoint kratos oryd/kratos:v0.5 hashers argon2 calibrate 1s
```

Then you will receive an output:

```shell
{
  'memory': 1048576, # = 1GB in KB
  'iterations': 2,
  'parallelism': 8,
  'salt_length': 16, # in bytes
  'key_length': 32 # in bytes
}
```

> The login process takes between **half a second** and **one second** for password hashing, giving a good balance between security and user experience.
> Source: https://www.ory.sh/choose-recommended-argon2-parameters-password-hashing/

## Installations

After cloning the project, run this command to start the server:

```shell
yarn start
```


## Deployment

You can directly deploy from this codebase or use my Docker image:
https://hub.docker.com/r/hckhanh/techbase-code-challenge

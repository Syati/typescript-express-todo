# Getting started

## Env

- osx
- docker-toolbox
- virtual box

## Run

### With docker


```sh
# Create a docker vm
$ docker-machine create --driver virtualbox tstemp

# Use the docker vm
$ eval "$(docker-machine env tstemp)"

# Check an access url
$ docker-machine ls

# Build and Run
$ docker-compose up

# Cmd below if you want to use livereload.
$ VBoxManage controlvm "tstemp" natpf1 "tcp-port35729,tcp,,35729,,35729";

```

Access the access url:3000 with browser


### On localhost

```sh
$ npm install
$ NODE_ENV=localhost grunt
```

## others

Remove compiled source

```
$ npm run clean
```


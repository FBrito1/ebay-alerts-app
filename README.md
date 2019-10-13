<h1 align="center">Welcome to ebay-alerts-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Manage alerts for products prices on Ebay.com

## Install

```sh
cd /server && yarn
cd /client && yarn
```

## Usage

```sh
# Run docker compose
docker-compose up
# Run the senMail job
cd /server && yarn mailJob


```

## Run tests

```sh
cd /server && yarn run test
```

## Environment Variables

> copy the .env.example file and rename to .env
> After that include your personal variables on the .env file.

```
#ENVIRONMENT
APP_PORT=3333
NODE_ENV=development

#EBAY KEYS
EBAY_APP_ID=yourappid

#MONGO INSTANCE
MONGO_URL=mongodb://localhost:27017/ebay_alerts

## You can use the mailtrap service for development tests
## https://mailtrap.io/
## create an account and put your credential on the .env file

#MAIL_HOST
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_SECURE=false
MAIL_USER=your_user
MAIL_PASS=your_pass

# REDIS
REDIS_PORT=6379
REDIS_HOST=localhost

```

## Made with

- React: [React](https://reactjs.org/)
- NodeJs: [NodeJs](https://nodejs.org/en/)
- MongoDB: [MongoDB](https://www.mongodb.com/)
- Docker: [Docker](https://www.docker.com/)
- Redis: [Redis](https://redis.io/)
- Bull: [Bull](https://github.com/OptimalBits/bull)

## Author

👤 **Fabio Brito**

- Github: [@FBrito1](https://github.com/FBrito1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/FBrito1/ebay-alerts-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

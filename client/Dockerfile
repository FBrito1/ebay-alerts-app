FROM node:alpine

RUN mkdir -p /srv/app/client

WORKDIR /srv/app/client

COPY package.json /srv/app/client

COPY yarn.lock /srv/app/client

RUN yarn

COPY . /srv/app/client

CMD ["npm", "start"]

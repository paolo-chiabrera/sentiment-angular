FROM node:6.3

MAINTAINER Paolo Chiabrera <paolo.chiabrera@gmail.com>

EXPOSE 80

# Install nginx

RUN apt-get update

RUN apt-get -y install nginx

# setup angular app

ENV NODE_ENV production

ADD package.json /tmp/package.json

RUN cd /tmp && npm install --production

RUN mkdir -p /home/app && cp -a /tmp/node_modules /home/app

WORKDIR /home/app

ADD . /home/app

RUN npm run build

# overwrite nginx config

RUN yes | cp ./nginx.conf /etc/nginx/nginx.conf

CMD service nginx start

FROM node:6.3

MAINTAINER Paolo Chiabrera <paolo.chiabrera@gmail.com>

ENV NODE_ENV production

# Install nginx

RUN apt-get update

RUN apt-get -y install nginx

# setup angular app

RUN mkdir -p /home/app

ADD . /home/app

WORKDIR /home/app

RUN npm install --dev

RUN npm run build

# overwrite nginx config

RUN yes | cp ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

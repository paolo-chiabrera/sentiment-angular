FROM node:6.3

MAINTAINER Paolo Chiabrera <paolo.chiabrera@gmail.com>

ENV NODE_ENV production

RUN npm install

RUN npm run build

COPY ./dist /usr/share/static/sentiment

# Set the default command to execute
# when creating a new container

CMD echo "All done"

FROM node:0.12

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby git rsync libkrb5-dev

RUN gem install sass
RUN npm install grunt-cli tsd -g 

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install
EXPOSE 3000 35729

CMD ["npm", "start"]


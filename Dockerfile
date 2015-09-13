FROM node:0.12

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby git rsync

RUN gem install sass
RUN npm install grunt-cli tsd -g 

RUN mkdir /express
WORKDIR /express
ADD . /express

RUN ln -fs app/Gruntfile.js
RUN ln -fs app/bower.json
RUN ln -fs app/package.json
RUN ln -fs app/tsd.json

RUN npm install
EXPOSE 3000 35729

CMD ["npm", "start"]


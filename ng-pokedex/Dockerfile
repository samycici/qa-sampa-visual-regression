# Using the official node image as the base
FROM node

# Cloning repository
RUN git clone https://github.com/samycici/qa-sampa-visual-regression.git

# Set workdir
WORKDIR qa-sampa-visual-regression/

# Installing dependencies
RUN npm install

#Running app
ENTRYPOINT npm start

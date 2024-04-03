# Install Linux Alipne - specific version + Node.js - specific version (recommended):
FROM node:20-alpine3.19

# Install global installations: 
RUN npm i -g ts-node

# Create a new folder for our application inside the image: 
WORKDIR /app

# Copy package.json and package-lock.json from vs-code into /app inside the image:
COPY package*.json /app

# Run npm i inside the image for creating node_modules inside the image:
RUN npm i 

# Copy our application into the image: 
COPY . /app

# Which command to run when container start: 
ENTRYPOINT npm start

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies using npm
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port on which the service will run
EXPOSE 4000

# Start the application
CMD ["npm", "start"]

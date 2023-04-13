# Employee Management Containerized
 
## Prerequisites
1) Install docker
2) Install mysql-client
3) install maven java
4)

## Run Mysql container

- sudo docker pull mysql/mysql-server:latest
- sudo docker run -p 3306:3306 --name mysql-docker-local -eMYSQL_ROOT_PASSWORD=root -d mysql:latest
- sudo mysql --host=ip --port=3306 -u root -p
- create user 'tom'@'%' identified by 'root';
- create database kube;
- GRANT ALL PRIVILEGES ON kube.* TO 'tom'@'%';

## Run Springboot Backend Container

- git clone https://github.com/14Rahul/Employee-Management-Three-Tier-App.git
- vi Employee-Management-Three-Tier-App/springboot-backend/src/main/resources/application.properties
  - spring.datasource.url=jdbc:mysql://ip:3306/kube?createDatabaseIfNotExist=true&allowPublicKeyRetrieval=true&useSSL=false
- mvn clean install
- cd Employee-Management-Three-Tier-App/springboot-backend/
- Dockerfile
  FROM amazoncorretto:11-alpine-jdk
  MAINTAINER baeldung.com
  COPY target/springboot-backend-0.0.1-SNAPSHOT.jar springboot-backend-0.0.1-SNAPSHOT.jar
  ENTRYPOINT ["java","-jar", "-Djava.net.preferIPv4Stack=true" ,"/springboot-backend-0.0.1-SNAPSHOT.jar"]
- sudo docker build --tag=backend:latest .
- sudo docker run -p 8080:8080 --name backend-server -d backend:latest

## Run React Frontend Container

- vi Employee-Management-Three-Tier-App/react-frontend/src/services/EmployeeService.js
  const EMPLOYEE_API_BASE_URL = "http://ip:8080/employees";
- cd Employee-Management-Three-Tier-App/react-frontend/
- Dockerfile
  FROM node:alpine
  WORKDIR /app
  COPY package.json ./
  COPY package-lock.json ./
  COPY ./ ./
  RUN npm i
  CMD ["npm", "run", "start"]
- sudo docker build -t front:latest .
- sudo docker run -it -d -p 4001:3000 front 

#Makefile
install:
	npm install
start:
	npm start
dev:
	npx webpack --mode development
lint:
	npm run eslint .
build:
	npx webpack --mode production

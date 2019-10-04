# blog-react-native
Blog application using React Native which allows users to perform CRUD operations. 
# quickstart
cd to project root directory
<br>
npm install
<br>
npm start

## In another terminal(#2):
We have to make a json server on our machine.

## Step 1:
cd to /jsonServer 

```
npm install
npm run db
```

## In another terminal(#3):
This starts the ngrok dependency (see scripts in package.json file)
```
npm run tunnel
```

## replace your ngrok "fowarding" URL (e.g. http://c797d552.ngrok.io) in blog/src/api/jsonServer.js.

## back in project root directory (/blog)
```
npm start
```

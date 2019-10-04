# blog-react-native
Blog application using React Native which allows users to perform CRUD operations. 
# quickstart
### Step 1:
cd to project root directory
<br>
npm install

### Step 2:
#### In another terminal(#2):
We have to make a json server on our machine. See package.json for 'npm run db' mentioned below.

cd to /jsonserver directory

```
npm install
npm run db
```

### Step 3:
#### In another terminal(#3):
This starts the ngrok dependency See package.json for 'npm run tunnel' script  mentioned below.
```
npm run tunnel
```
### Step 4:
replace your ngrok "fowarding" URL (e.g. http://c797d552.ngrok.io) in blog/src/api/jsonServer.js.

### Step 5: terminal #1
back in project root directory (/blog)
```
npm start
```

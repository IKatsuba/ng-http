# NgHttp

NgHttp - experimental declarative server written with Angular.
The project was created only to demonstrate the capabilities of Angular.

For creating server just write:
```html
<server port="8080">
  <get url="/some-url" contentType="text/html">
    <b>Some content</b>
  </get>
</server>
```

## Build and serve

To build an app run
```
npm run build
```

To serve a server run.
```
npm start
```
Open [http://localhost:8080/some-url](http://localhost:8080/some-url)

# Project structure
- apps/sandbox - an example application
- libs/platform - a custom platform for bootstrapping
- libs/server - components and directives for creating a server and handling requests

The project uses [@rxnode/http](https://rxnode.gitbook.io/docs/) and [@rxnode/fs](https://rxnode.gitbook.io/docs/) for creating a reactive server. 

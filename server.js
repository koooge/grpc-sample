const grpc = require('grpc');
const helloworld = grpc.load('hello.proto').helloworld;

function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name});
}

function main() {
  const server = new grpc.Server();
  server.addService(helloworld.HelloWorld.service, {
    sayHello: sayHello
  });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}
main();

const grpc = require('grpc');
const helloworld = grpc.load('hello.proto').helloworld;
const client = new helloworld.HelloWorld('localhost:50051', grpc.credentials.createInsecure());

client.sayHello({name: 'client'}, function(err, res) {
  console.log('HelloWorld: ', res.message);
});

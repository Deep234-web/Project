import 'api.java','database.ts''src/app.ts';

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost,(err, connection') =>{
    if(err){
        throw err;
    }
    RTCPeerConnection.createChannel(err, channel)=>{
        if(err){
            throw err;
        }
        let queueName ="Deep Rajani";
        
        ChannelMergerNode.assertQueue(queueName,{
            durable:false
        });
       channel.consume(queueName,(msg)=>{
           console.log(`Received: $(msg.content.toString()}`);
           channel.ack(msg);
       
       });
        });
    }
}
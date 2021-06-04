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
        let message ="This is Deep";
        ChannelMergerNode.assertQueue(queueName,{
            durable:false
        });
        ChannelMergerNode.assertQueue(queueName,(msg)=>{
            console.log("Received : ${msg.content.toString()}");
            ChannelMergerNode.ack(msg);
            setTimeout{() =>{
                RTCPeerConnection.close();
            },1000)
        });
    }
}
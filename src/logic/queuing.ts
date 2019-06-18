﻿import * as amqplib from 'amqplib';
import { MessageBrokerConfiguration as config } from '../configuration/message.broker.configuration';

export async function pushTo<T>(
    queueName: string,
    message: T
): Promise<boolean> {
    config.Verify();

    let connection = await amqplib.connect(`amqp://${config.username}:${config.password}@${config.host}`);
    let channel = await connection.createChannel();
    let assertQueue = await channel.assertQueue(queueName);

    if (assertQueue) {
        let result = await channel.sendToQueue(queueName, new Buffer(JSON.stringify(message)));
        return result;
    }
    else return false;
}

export async function popFrom<T>(
    queueName: string,
    fn: (value: T) => void
): Promise<void> {
    config.Verify();

    let connection = await amqplib.connect(`amqp://${config.username}:${config.password}@${config.host}`);
    let channel = await connection.createChannel();
    let assertQueue = await channel.assertQueue(queueName);

    if (assertQueue) {
        channel.consume(queueName, (msg) => {
            if (msg !== null) {
                channel.ack(msg);
                let t: T = JSON.parse(msg.content.toString()) as T;
                fn(t); 
            }
        });
    }
}
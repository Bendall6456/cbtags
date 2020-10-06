
```js
client.on('message', message => {
	if(message.author.bot) return;
	else if (message.content === `${prefix}ping`) {
		message.channel.send(`pong`);
	}
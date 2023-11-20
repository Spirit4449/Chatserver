const { EmbedBuilder, WebhookClient } = require('discord.js');


const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1170100824127590432/h3Qr1EsHp0v4Ism3EtvbuyFTsQHMjw0z6KMv62SfvZkWYyCeLtUdjN5faPsdDIcOtSV3' });

const embed = new EmbedBuilder()
	.setTitle('Some Title')
	.setColor(0x00FFFF);

function sendDiscordMessage(message, name) {
    webhookClient.send({
        content: message,
        username: name,
        avatarURL: 'https://i.imgur.com/AfFp7pu.png',
    });
}

function sendDiscordEmbed() {
    webhookClient.send({
        content: 'Webhook test',
        username: 'Spirit',
        avatarURL: 'https://i.imgur.com/AfFp7pu.png',
        embeds: [embed],
    });
}

sendDiscordMessage('what up guys', "hey")
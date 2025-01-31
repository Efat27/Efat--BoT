const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ArYAN",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ArYanInfo = {
				Botname: '⇛⌘ Nezuko kamado 𝐕 𝟐.𝟎 ⌘⇚',
				Prefix: '-',
				Owner: 'anTik',
				Age: '17+',
				Tiktok: 'NONE,
				Whatsapp: 'NOT SHARE',
				Bio: '𝘽𝙚𝙞𝙣𝙜 𝙖𝙡𝙤𝙣𝙚 𝙞𝙨 𝙗𝙚𝙩𝙩𝙚𝙧 𝙩𝙝𝙖𝙣 𝙗𝙚𝙞𝙣𝙜 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚 𝙬𝙧𝙤𝙣𝙜 𝙥𝙚𝙤𝙥𝙡𝙚👤❌',
				Relationship: 'SINGLE',
				Messenger: 'https://www.facebook.com/antik404',
				Instagram: 'NONE',
				Grouplink: 'https://m.me/j/AbbjIK6AY4owimjD/'
			};

			const ArYan = 'https://bit.ly/3CFRsur';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ArYan, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'ArYan_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `
• Bot & Owner Info
╰‣ Bot Name: ${ArYanInfo.Botname}
╰‣ Bot Prefix: ${ArYanInfo.Prefix}
╰‣ Owner: ${ArYanInfo.Owner}
╰‣ Age: ${ArYanInfo.Age}
╰‣ Tiktok: ${ArYanInfo.Tiktok}
╰‣ Whatsapp: ${ArYanInfo.Whatsapp}
╰‣ relationship: ${ArYanInfo.Relationship}
╰‣ bio: ${ArYanInfo.Bio}
╰‣ Messenger: ${ArYanInfo.Messenger}
╰‣ Instagram: ${ArYanInfo.Instagram}
╰‣ Grouplink: ${ArYanInfo.Grouplink}`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};

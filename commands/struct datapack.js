module.exports = {
	name: 'struct datapack',
	description: 'Shows Datapack Structure for 1.16',
  aliases: ['datapack'],
	execute(message, args) {
		message.channel.send('📂 datapacks\n\t📂 <data_pack>\n\t\t📜 pack.mcmeta\n\t\t📂 data\n\t\t\t📂 <namespace>\n
                📂 advancements\n
                📂 loot_tables\n
                📂 functions\n
                📂 predicates\n
                📂 recipes\n
                📂 structures\n
                📂 tags\n
                    📂 blocks\n
                    📂 entity_types\n
                    📂 fluids\n
                    📂 functions\n
                    📂 items\n
            📂 minecraft\n
                📂 tags\n
                    📂 functions\n
                        :page_facing_up: load.json\n
                        :page_facing_up: tick.json');
	},
};

import { Tigris } from '@tigrisdata/core';
import { Artist } from '~/db/models/artists';

async function main() {
	const tigrisClient = new Tigris();
	await tigrisClient.getDatabase().initializeBranch();
	await tigrisClient.registerSchemas([Artist]);
}

main()
	.then(async () => {
		console.log('Tigris setup complete!');
		process.exit(0);
	})
	.catch(async (e) => {
		console.error(e);
		process.exit(1);
	});

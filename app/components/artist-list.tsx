export const ArtistList = () => {
	const { artists } = {
		artists: [
			{
				id: '3jK9MiCrA42lLAdMGUZpwa',
				name: 'Anderson .Paak',
				url: 'https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa',
				genres: ['escape room'],
				images: [
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab6761610000e5eb96287bd47570ff13f0c01496',
						width: 640,
					},
					{
						height: 320,
						url: 'https://i.scdn.co/image/ab6761610000517496287bd47570ff13f0c01496',
						width: 320,
					},
					{
						height: 160,
						url: 'https://i.scdn.co/image/ab6761610000f17896287bd47570ff13f0c01496',
						width: 160,
					},
				],
			},
			{
				id: '73sIBHcqh3Z3NyqHKZ7FOL',
				name: 'Childish Gambino',
				url: 'https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL',
				genres: ['atl hip hop', 'hip hop', 'pop', 'rap'],
				images: [
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded',
						width: 640,
					},
					{
						height: 320,
						url: 'https://i.scdn.co/image/ab676161000051743ef779aa0d271adb2b6a3ded',
						width: 320,
					},
					{
						height: 160,
						url: 'https://i.scdn.co/image/ab6761610000f1783ef779aa0d271adb2b6a3ded',
						width: 160,
					},
				],
			},
			{
				id: '0YrtvWJMgSdVrk3SfNjTbx',
				name: 'Death Cab for Cutie',
				url: 'https://open.spotify.com/artist/0YrtvWJMgSdVrk3SfNjTbx',
				genres: ['indie pop', 'indie rock', 'modern rock', 'washington indie'],
				images: [
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab6761610000e5eb378adae733fc578108e3f534',
						width: 640,
					},
					{
						height: 320,
						url: 'https://i.scdn.co/image/ab67616100005174378adae733fc578108e3f534',
						width: 320,
					},
					{
						height: 160,
						url: 'https://i.scdn.co/image/ab6761610000f178378adae733fc578108e3f534',
						width: 160,
					},
				],
			},
		],
	};

	if (artists.length < 1) {
		return (
			<div className="artist-list empty">
				<p>no artists match the current filters</p>
			</div>
		);
	}

	return (
		<div className="artist-list">
			{artists.map((artist) => {
				return (
					<div className="artist" key={artist.id}>
						<img src={artist.images[1].url} alt={artist.name} />
						<div className="details">
							<h2>{artist.name}</h2>
							<p>
								<a href={artist.url}>view on Spotify</a>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

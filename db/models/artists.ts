import {
	Field,
	PrimaryKey,
	SearchField,
	TigrisCollection,
	TigrisDataTypes,
} from '@tigrisdata/core';

export class ArtistImage {
	@Field()
	url!: string;

	@Field()
	height!: number;

	@Field()
	width!: number;
}

@TigrisCollection('artists')
export class Artist {
	@PrimaryKey({ order: 1, autoGenerate: true })
	id?: string;

	@SearchField()
	@Field()
	name!: string;

	@Field()
	url!: string;

	@SearchField({ elements: TigrisDataTypes.STRING, facet: true })
	@Field({ elements: TigrisDataTypes.STRING })
	genres!: Array<string>;

	@Field({ elements: ArtistImage })
	images!: Array<ArtistImage>;
}

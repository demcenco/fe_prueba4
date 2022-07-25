import db from '$lib/db/db';

export async function GET() {
	const data = db.prepare('SELECT * FROM property').all();

	return { body: { data } };
}
export async function POST({ request }) {
	const { item } = await request.json();
	console.log(item);
	const data = await db
		.prepare(
			`
        INSERT INTO      property(    				title,
			address,
			rooms ,
			baths  ,
			price  ,
			rented ,
			type    ,
			rented_by)

	VALUES (?,?,?,?,?,?,?,?)
    `
		)
		.run(
			item.title,
			item.address,
			item.rooms,
			item.baths,
			item.price,
			item.rented,
			item.type,
			item.rented_by
		);

	return { body: { data: 121 } };
}

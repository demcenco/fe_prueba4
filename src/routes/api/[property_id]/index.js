import db from '$lib/db/db';

export async function GET({ params }) {
	const item = await db.prepare('SELECT * FROM property WHERE id = ?').get(params.property_id);

	return { body: { item } };
}
export async function PUT({ request }) {
	const { item } = await request.json();

	const data = await db
		.prepare(
			`
        UPDATE      property
        SET         title = ?,
					address = ?,
                    rooms   = ?,
                    baths   = ?,
                    price   = ?,
                    rented  = ?,
                    type    = ?,
                    rented_by =?
		WHERE 		id = ?
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
			item.rented_by,
			item.id
		);

	return { body: { data: 121 } };
}
export async function DELETE({ params }) {
	const data = await db.prepare('DELETE FROM property WHERE id = ?').run(params.property_id);

	return { body: {} };
}

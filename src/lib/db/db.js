import sqlite from 'better-sqlite3';

// this is a top-level await
const db = new sqlite('src/lib/db/property.sqlite');
// db.prepare('drop table property').run();
const schema = `CREATE TABLE IF NOT EXISTS property(
    id INTEGER NOT NULL PRIMARY KEY, 
    title TEXT NOT NULL ,
    address TEXT NOT NULL,
    rooms INTEGER NOT NULL,
    baths INTEGER NOT NULL,
    price INTEGER NOT NULL,
    rented BOOLEAN NOT NULL,
    type TEXT NOT NULL,
    rented_by TEXT
)`;

db.exec(schema);
// db.prepare('DELETE FROM property').run();
const insert = db.prepare(`
		INSERT INTO property (title, address,rooms,baths,price,rented,type,rented_by) 
		SELECT @title, @address, @rooms,@baths,@price,@rented,@type,@rented_by
		WHERE  NOT EXISTS(SELECT 1 FROM property WHERE address = @address)`);
const mock = [
	{
		title: 'Departamento Providencia',
		address: 'Nueva Providencia 435, Providencia',
		rooms: 3,
		baths: 2,
		price: 500000,
		rented: 0,
		type: 'Departamento',
		rented_by: null
	},
	{
		title: 'Casa Nunoa',
		address: 'Av.Grecia 3544, Nunoa',
		rooms: 4,
		baths: 2,
		price: 700000,
		rented: 0,
		type: 'Casa',
		rented_by: null
	},
	{
		title: 'Casa Nunoa',
		address: 'Diagonal Oriente 435',
		rooms: 3,
		baths: 1,
		price: 400000,
		rented: 0,
		type: 'Casa',
		rented_by: null
	},
	{
		title: 'Casa Macul',
		address: 'Av.Macul  4354',
		rooms: 5,
		baths: 2,
		price: 900000,
		rented: 1,
		type: 'Casa',
		rented_by: 'Jose Baeza'
	},
	{
		title: 'Departamento Macul',
		address: 'Exiquiel Fernandez 4335',
		rooms: 3,
		baths: 1,
		price: 700000,
		rented: 1,
		type: 'Departamento',
		rented_by: 'Marta Diaz'
	}
];
mock.forEach((element) => {
	insert.run(element);
});

export default db;

import * as yup from 'yup';

export const updateSchema = yup.object().shape({
	title: yup.string().trim().required('Debe ingresar el titulo').min(2),
	address: yup.string().trim().required('Debe ingresar la direccion').min(2),
	rooms: yup
		.number()
		.integer()
		.required('Debe ingresar los dormitorios')
		.typeError('Debe ingresar un numero de dormitorios')
		.min(1, 'La cantidad minima de dormitorios es 1'),
	baths: yup
		.number()
		.integer()
		.required('Debe ingresar los banos')
		.typeError('Debe ingresar un numero de banos')
		.min(0, 'La cantidad minima de banos es 1'),
	type: yup.string().oneOf(['Casa', 'Departamento']),
	price: yup
		.number()
		.integer()
		.min(1, 'Valor minimo 1')
		.max(9999999999)
		.typeError('Debe ingresar un precio')
		.required('Debe ingresar un precio'),
	rented: yup.bool().oneOf([true, false]),
	rented_by: yup
		.string()
		.nullable()
		.when('rented', {
			is: true,
			then: yup
				.string()
				.required('Debe ingresar el nombre del arrendatario')
				.trim()
				.typeError('Debe ingresar al arrendatario')
		})
});

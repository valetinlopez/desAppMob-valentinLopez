const API_BASE_URL = 'https://api.sampleapis.com/coffee';

function normalizeCoffeeItem(item, category) {
  return {
    id: `${category}-${item.id}`,
    apiId: item.id,
    category,
    title: item.title || 'Cafe sin nombre',
    description: item.description || 'Sin descripcion disponible.',
    ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
    image: item.image || null,
  };
}

export async function fetchCoffees(category = 'hot') {
  const response = await fetch(`${API_BASE_URL}/${category}`);

  if (!response.ok) {
    throw new Error('No se pudo obtener el catalogo de cafes.');
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error('La respuesta de la API no tiene el formato esperado.');
  }

  return data.map((item) => normalizeCoffeeItem(item, category));
}

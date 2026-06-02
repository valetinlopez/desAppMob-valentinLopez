export const burgerMenu = [
  {
    id: 'classic-portena',
    name: 'Clasica Portena',
    price: '$12.500',
    tag: 'Best seller',
    description: 'Medallon smash doble, cheddar, cebolla grillada, pepino y salsa de la casa.',
  },
  {
    id: 'caballito-bacon',
    name: 'Caballito Bacon',
    price: '$13.900',
    tag: 'Crunch',
    description: 'Carne premium, panceta crocante, provoleta, barbacoa ahumada y papa pay.',
  },
  {
    id: 'veggie-palermo',
    name: 'Veggie Palermo',
    price: '$11.800',
    tag: 'Veggie',
    description: 'Garbanzo especiado, queso tybo, tomate fresco, rucula y mayo de limon.',
  },
  {
    id: 'obelisco-picante',
    name: 'Obelisco Picante',
    price: '$14.400',
    tag: 'Hot',
    description: 'Doble carne, jalapenos, cheddar, cebolla crispy y salsa roja bien intensa.',
  },
];

export const orders = [
  {
    id: 'ped-201',
    customer: 'Lucia M.',
    items: '2 Clasica Portena + 1 combo papas',
    status: 'En cocina',
    eta: '12 min',
  },
  {
    id: 'ped-202',
    customer: 'Mesa 4',
    items: '1 Caballito Bacon + 2 gaseosas',
    status: 'Listo para servir',
    eta: '3 min',
  },
  {
    id: 'ped-203',
    customer: 'Take away',
    items: '1 Veggie Palermo + 1 limonada',
    status: 'Esperando retiro',
    eta: '8 min',
  },
];

export const tables = [
  { id: 'm1', name: 'Mesa 1', guests: '2 personas', status: 'Ocupada' },
  { id: 'm2', name: 'Mesa 2', guests: 'Libre', status: 'Disponible' },
  { id: 'm3', name: 'Mesa 3', guests: '4 personas', status: 'Reservada' },
  { id: 'm4', name: 'Mesa 4', guests: '3 personas', status: 'Pidiendo cuenta' },
];

const vendors = [
 {
 id: 'restaurant-13',
 name: 'Aro Cafe',
 location: 'Mahallah Uthaman, Block Office',
 openHours: '7:00 am - 10:00 pm',
 isOpen: true,
 menu: [
 { id: 'my-1', name: 'Thunder Hot Dawg', description: 'Sausage in a bun with special sauce', price: 7.5, category: 'Bread',
available: true },
 { id: 'my-2', name: 'Flaming Tenders', description: 'Chicken Tenders with spicy flake', price: 6, category:
'Noodles', available: true },
 { id: 'my-3', name: 'Soda', description: 'normal soft drinks', price: 2.5, category:
'Drinks', available: false },
 ],
 },
 {
 id: 'kafe-aminah',
 name: 'Mahallah Aminah Cafe',
 location: 'Mahallah Aminah, Ground Floor',
 openHours: '8:00 am - 9:00 pm',
 isOpen: true,
 menu: [
 { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
 { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price:
3, category: 'Drinks', available: true },
 ],
 },
]
export default vendors

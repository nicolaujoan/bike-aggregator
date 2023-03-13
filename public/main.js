// document.addEventListener('DOMContentLoaded', async () => {
//     const availability = await api.getAvailability();
//     console.log(availability);

//     const header = document.createElement('h1');
//     header.innerHTML = 'Hello from node and express';
//     document.body.appendChild(header);

//     const list = document.createElement('ul');

//     availability.forEach(a => {
//         let li = document.createElement('li');
//         li.innerText = a.bike.brand;
//         list.appendChild(li);
//     });

//     document.body.appendChild(list);
// });
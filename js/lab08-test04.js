
const photos = JSON.parse(content);
for (let item of photos){
    document.write(`<figure>
               <img src="images/${item.filename}" alt="${item.title}">
               <figcaption><h2>${item.title}</h2>`);
    for (let col of item.colors)
                  {
                      document.write(`<span style="background-color: ${col.hex}"></span>`);
                  }
    document.write(`</figcaption></figure>`);
               }
   const image = document.querySelector(".image");
        

        const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
        // const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/02ed2f6ed8dabcb89037ec14cf0b2d61c56a7a74/sprites/pokemon/other/dream-world/";
        const nameURL = "https://pokeapi.co/api/v2/pokemon/";


        for (let i = 1; i <= 50; i++) {
            const div = document.createElement('div');
            const label = document.createElement('p');
            const type = document.createElement('p');

            label.innerText = `#${i}`;
            const name = document.createElement('p');

            fetch(`${nameURL}${i}`)
        .then(response => response.json())
        .then(data => {
            name.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            type.innerText = `Type: ${types.charAt(0).toUpperCase() + types.slice(1)}`;
        })
        .catch(error => {
            name.innerText = "Unknown";
            type.innerText = "Type: Unknown";
            console.error(`Error fetching Pokemon ${i} data:`, error);
        });

            const newImg = document.createElement('img');
            newImg.src = `${baseURL}${i}.gif`;  //if you want .svg image then comment the 2nd baseURL
            div.append(newImg);
            div.append(label);
            div.append(name);
            div.append(type);
            image.appendChild(div);
        }

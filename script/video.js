function displayCatagory (data) {
    const categoryContainer = document.getElementById ('categories');
    data.forEach( (item) => {
        
        const button = document.createElement('button');
        button.classList ='btn';
        button.innerText = item.category;
        categoryContainer.appendChild (button);
    });
}

async function loadCatagory () {
    const res = await fetch ('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCatagory(data.categories);
    

    
}

async function loadVideos () {
    const res = await fetch ('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    displayVideos (data.videos);
    

    
}


function displayVideos (videos) {
    const videoContainer = document.getElementById ('videos');
    videos.forEach ((video)=> {
        console.log (video);
        const card = document.createElement('div');
        card.classList = 'card card-compact shadow-xl'
        card.innerHTML = 
        `   
            <figure class = "h-[200px]">
                    <img class = "h-full w-full object-cover"
                    src=${video.thumbnail}
                    alt="Shoes" />
            </figure>
            <div class="p-2 flex gap-2">
            <div class="img">
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="">
            </div>
            <div>
                <h2 class= "font-bold">${video.title}</h2>
                <div class = "flex items-center gap-1">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    <img class= "w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                </div>
                
                <p></p>
            </div>
            </div>

        `

        videoContainer.appendChild(card);
    })
}

loadCatagory ();
loadVideos ();

const obj = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
const arr=[
    {
        id: 1,
        name: "daenerys targaryen",
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/game-of-thrones-emilia-clarke.jpg",
        text: "Daenerys is the only daughter and youngest child of King Aerys II Targaryen, the Mad King, and his sister-wife,Rhaella. Her father died during the Sack of King's Landing before she was even born. Her father died during the Sack of King's Landing before she was even born."

    },
    {
        id: 2,
        name: "Jon Snow",
        img: "https://media.gq.com/photos/5c9d404a8d459e781a1333b5/3:4/w_971,h_1295,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg",
        text: "Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised alongside Eddard's lawful children at Winterfell."
    },
    {
        id: 3,
        name: "Ned Stark",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ned_Stark-Sean_Bean.jpg/220px-Ned_Stark-Sean_Bean.jpg",
        text: "Lord Eddard Stark, also known as Ned Stark, was the head of House Stark, the Lord of Winterfell, Lord Paramount and Warden of the North, and later Hand of the King to King Robert I Baratheon. He was the older brother of Benjen, Lyanna and the younger brother of Brandon Stark."
    },
    {
        id: 4,
        name: "Tyrion Lanister",
        img: "https://i.redd.it/eobnwqn7rm061.jpg",
        text: "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King to Brandon Stark."
    }
];
var ind=0;

function next(){
    ind=(ind+1)%4;
    document.getElementById("name").innerText=arr[ind].name;
    document.getElementById("image").src=arr[ind].img;
    document.getElementById("text").innerText=arr[ind].text;
}
function prev(){
    ind=(ind-1+3)%4;
    document.getElementById("name").innerText=arr[ind].name;
    document.getElementById("image").src=arr[ind].img;
    document.getElementById("text").innerText=arr[ind].text;
}
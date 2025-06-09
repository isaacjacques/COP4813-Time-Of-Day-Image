const hour = new Date().getHours();
const imageElement = document.getElementById("timeImage");
let imageFile;

if (hour >= 6 && hour < 12) {
    imageFile = "morning.jpg";
} else if (hour >= 12 && hour < 18) {
    imageFile = "afternoon.jpg";
} else {
    imageFile = "night.jpg";
}

imageElement.src = imageFile;
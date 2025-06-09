const hour = new Date().getHours();
const imageElement = document.getElementById("timeImage");
let imageFile;

const COLORS = {
    morning: "#994d00",    
    afternoon: "#007399", 
    default: "#260099"
};
hour = 6;
if (hour >= 6 && hour < 12) {
    imageFile = "morning.jpg";
} else if (hour >= 12 && hour < 18) {
    imageFile = "afternoon.jpg";
} else {
    imageFile = "night.jpg";
}

imageElement.src = imageFile;
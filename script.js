const hour = new Date().getHours();
let backgroundColor;

const COLORS = {
    morning: "#994d00",    
    afternoon: "#007399", 
    default: "#260099"
};


if (hour >= 6 && hour < 12) {
    backgroundColor = COLORS.morning;
} else if (hour >= 12 && hour < 18) {
    backgroundColor = COLORS.afternoon;
} else {
    backgroundColor = COLORS.default;
}

document.body.style.backgroundColor = backgroundColor;
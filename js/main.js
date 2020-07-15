// Hover Effect for Header Images 

let myAnimation1 = new hoverEffect({
 parent: document.querySelector('.dist1'),
 intensity: 0.2,
 image1: '../Assets/woman-in-white-spaghetti-strap-top-3409421.jpg',
 image2: '../Assets/woman-holding-her-scarf-2983327.jpg',
 displacementImage: '../Assets/liquid.png',
 imagesRatio: 450/300
});

let myHoverEffect = new hoverEffect({
 parent: document.querySelector('.hov'),
 intensity: 0.3,
 image1: "../Assets/gray-scale-photo-of-woman-2893339.jpg",
 image2: "../Assets/photo-of-woman-wearing-brown-turtleneck-sweater-3754144.jpg",
 displacementImage: "../Assets/Stripe.png",
 imagesRatio: 450/300,
 angle: Math.PI / 8
});

let myHover = new hoverEffect({
 parent: document.querySelector('.hov2'),
 intensity: 0.2,
 image1: "../Assets/smiling-man-in-white-turtleneck-sweater-3674249.jpg",
 image2: "../Assets/woman-holding-her-scarf-2983327.jpg",
 displacementImage: "../Assets/strip.png",
 imagesRatio: 450/300,
 angle: Math.PI / 16
});
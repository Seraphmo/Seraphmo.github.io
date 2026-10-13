// Click and Drag multiple draggable PNGs with additional non-draggable PNGs for the background
// Daniel Shiffman <http://www.shiffman.net>
let draggableObjects = [];
let backgroundImages = [];
let selectionRange = -2000; // Adjust this value to control the selection range
let gameStarted = false; // Variable to track whether the game has started
let playButton;
let startscreenImage;
let canvas;
let nonInteractiveImages = [];
let currentImageIndex = 0;
//let lastSwitch = 0; // Timestamp of the last image switch

function preload() {
  // Replace these URLs with the raw image URLs from GitHub for the background PNGs
  let backgroundImageUrl1 =
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/Background.PNG";
  let backgroundImageUrl2 =
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/closet.PNG";
  let backgroundImageUr0l2 =
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/closet2.PNG";
  let backgroundImageUrl3 =
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/model.PNG";
  let backgroundImageUrl4 =
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/closed mouth.PNG";
  backgroundImages.push(loadImage(backgroundImageUrl1));
  backgroundImages.push(loadImage(backgroundImageUrl2));
  backgroundImages.push(loadImage(backgroundImageUr0l2));
  backgroundImages.push(loadImage(backgroundImageUrl3));
  backgroundImages.push(loadImage(backgroundImageUrl4));

  // Load your non-interactive images during preload
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue1.PNG"
    )
  );
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue2.PNG"
    )
  );
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue3.PNG"
    )
  );
  // Add more images as needed
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue4.PNG"
    )
  );
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue5.PNG"
    )
  );
  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue6.PNG"
    )
  );

  nonInteractiveImages.push(
    loadImage(
      "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/dialogue7.PNG"
    )
  );
  // ... (rest of the code)

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/lingerie.PNG"
      ),
      380,
      204
    )
  );
  // Modify the width and height for the first draggable object
  draggableObjects[0].width = 87; // Set the desired width
  draggableObjects[0].height = 166; // Set the desired height
  draggableObjects[0].selectionRange = -20; // Adjust this value as needed
  draggableObjects[0].selectionRangeX = -20; // Adjust this value as needed
  draggableObjects[0].selectionRangeY = -20; // Adjust this value as needed

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/mj shoes.PNG"
      ),
      60,
      530
    )
  );
  draggableObjects[1].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[1].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  // Modify the width and height for the first draggable object
  draggableObjects[1].width = 90; // Set the desired width
  draggableObjects[1].height = 100; // Set the desired height
  draggableObjects[1].selectionRange = -20; // Adjust this value as needed
  draggableObjects[1].selectionRangeX = -100; // Adjust this value as needed
  draggableObjects[1].selectionRangeY = -100; // Adjust this value as needed

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/white boots.PNG"
      ),
      60,
      390
    )
  );
  draggableObjects[2].selectionOffsetX = -100; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[2].selectionOffsetY = -100; // Adjust the selection offset on the Y-axis for this specific object
  // Modify the width and height for the first draggable object
  draggableObjects[2].width = 109; // Set the desired width
  draggableObjects[2].height = 190; // Set the desired height
  draggableObjects[2].selectionRange = -20; // Adjust this value as needed
  draggableObjects[2].selectionRangeX = -20; // Adjust this value as needed
  draggableObjects[2].selectionRangeY = -20; // Adjust this value as needed

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/leg warmers.PNG"
      ),
      155,
      510
    )
  );
  draggableObjects[3].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[3].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  // Modify the width and height for the first draggable object
  draggableObjects[3].width = 100; // Set the desired width
  draggableObjects[3].height = 130; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/short shorts.PNG"
      ),
      60,
      280
    )
  );
  draggableObjects[4].selectionOffsetX = 1000; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[4].selectionOffsetY = 1000; // Adjust the selection offset on the Y-axis for this specific object
  // Modify the width and height for the first draggable object
  draggableObjects[4].width = 90; // Set the desired width
  draggableObjects[4].height = 55; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/pleated skirt.PNG"
      ),
      155,
      290
    )
  );
  draggableObjects[5].selectionOffsetX = 100; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[5].selectionOffsetY = 100; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[5].width = 100; // Set the desired width
  draggableObjects[5].height = 90; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/pink crop shirt.PNG"
      ),
      110,
      210
    )
  );
  draggableObjects[6].selectionOffsetX = 10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[6].selectionOffsetY = 100; // Adjust the selection offset on the Y-axis for this specific object

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/cutout shirt.PNG"
      ),
      680,
      300
    )
  );
  draggableObjects[7].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[7].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[7].width = 67; // Set the desired width
  draggableObjects[7].height = 110; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/black dress.PNG"
      ),
      600,
      230
    )
  );
  draggableObjects[8].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[8].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[8].width = 90; // Set the desired width
  draggableObjects[8].height = 400; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/pink dress.PNG"
      ),
      680,
      130
    )
  );
  draggableObjects[9].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[9].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[9].width = 100; // Set the desired width
  draggableObjects[9].height = 180; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/ribbon sweater.PNG"
      ),
      635,
      480
    )
  );
  draggableObjects[10].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[10].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[10].width = 155; // Set the desired width
  draggableObjects[10].height = 160; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/corset top.PNG"
      ),
      155,
      380
    )
  );
  draggableObjects[11].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[11].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[11].width = 64; // Set the desired width
  draggableObjects[11].height = 107; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/choker.PNG"
      ),
      680,
      50
    )
  );
  draggableObjects[12].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[12].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[12].width = 30; // Set the desired width
  draggableObjects[12].height = 30; // Set the desired height

  draggableObjects.push(
    new Draggable(
      loadImage(
        "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/sailor jacket.PNG"
      ),
      110,
      110
    )
  );
  draggableObjects[13].selectionOffsetX = -10; // Adjust the selection offset on the X-axis for this specific object
  draggableObjects[13].selectionOffsetY = 5; // Adjust the selection offset on the Y-axis for this specific object
  draggableObjects[13].width = 150; // Set the desired width
  draggableObjects[13].height = 170; // Set the desired height

  // Load start screen image during preload
  startscreenImage = loadImage(
    "https://raw.githubusercontent.com/Seraphmo/dress-up-game-final/main/Start%20screen%20.PNG"
  );
}

function setup() {
  createCanvas(740, 590);

  // Initialize play button
  playButton = createButton("Play");
  playButton.position(300, 550);
  playButton.mousePressed(startGame); // Call the startGame function when the button is pressed

  // Initialize reset button
  resetButton = createButton("Reset");
  resetButton.position(400, 550);
  resetButton.mousePressed(resetSketch);
}

// ... (your preload function remains unchanged)

class Draggable {
  constructor(img, initialX, initialY) {
    this.x = initialX;
    this.y = initialY;

    // Set the desired hitbox width and height
    this.hitboxWidth = -1000;
    this.hitboxHeight = -1000;
    this.selectionRange = selectionRange; // Add this line to store the selection range

    // Adjust the width and height of the draggable object
    this.width = 100; // Set the desired width
    this.height = 100; // Set the desired height

    this.selectionRange = 0; // Set the default selection range

    this.img = img;
    this.dragging = false;
    this.referenceX = 0; // Reference point X
    this.referenceY = 0; // Reference point Y
  }

  inSelectionRange() {
    let leftEdge = this.x - this.width / 2 - this.selectionRange;
    let rightEdge = this.x + this.width / 2 + this.selectionRange;
    let topEdge = this.y - this.height / 2 - this.selectionRange;
    let bottomEdge = this.y + this.height / 2 + this.selectionRange;

    return (
      mouseX > leftEdge &&
      mouseX < rightEdge &&
      mouseY > topEdge &&
      mouseY < bottomEdge
    );
  }

  over() {
    if (gameStarted) {
      let leftEdge = this.x - this.width / 2 - this.selectionRange;
      let rightEdge = this.x + this.width / 2 + this.selectionRange;
      let topEdge = this.y - this.height / 2 - this.selectionRange;
      let bottomEdge = this.y + this.height / 2 + this.selectionRange;

      return (
        mouseX > leftEdge &&
        mouseX < rightEdge &&
        mouseY > topEdge &&
        mouseY < bottomEdge
      );
    }

    // If the game hasn't started, allow other elements to handle mouse events
    return false;
  }

  update() {
    if (this.dragging) {
      this.x = mouseX - this.referenceX;
      this.y = mouseY - this.referenceY;
    }
  }

  show() {
    // Display the image using the adjusted dimensions for appearance
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.width, this.height);
  }

  pressed() {
    if (this.over()) {
      this.referenceX = mouseX - this.x;
      this.referenceY = mouseY - this.y;
      this.dragging = true;
    }
  }

  released() {
    this.dragging = false;
  }
}

function mousePressed() {
  if (gameStarted) {
    for (let i = draggableObjects.length - 1; i >= 0; i--) {
      if (draggableObjects[i].over()) {
        draggableObjects[i].pressed();
        cursor("grab");
        break;
      }
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < draggableObjects.length; i++) {
    draggableObjects[i].released();
  }
  cursor(ARROW);
}

function draw() {
  background(255);

  timer = frameCount % (60*60); // Adjust for a transition every 60 seconds 60*60

  // Draw non-draggable background images
  for (let i = 0; i < backgroundImages.length; i++) {
    image(backgroundImages[i], 370, 300, width, height);
  }

  if (timer === 1) {
    // Change the current image to the next one in the array
    currentImageIndex = (currentImageIndex + 1) % nonInteractiveImages.length;
  }

  if (timer > 60*10) {
    // Adjust this value for a longer time between transitions (10 seconds in this case) 60*10
    // Display the current image
    let img = nonInteractiveImages[currentImageIndex];

    // Adjust the size and position of the dialogue image
    let dialogueX;
    let dialogueY;
    let dialogueWidth;
    let dialogueHeight;

    // Adjust the placement of each dialogue PNG individually
    if (currentImageIndex === 0) {
      dialogueX = 350;
      dialogueY = 350;
      dialogueWidth = 750;
      dialogueHeight = 700;
    } else if (currentImageIndex === 1) {
      dialogueX = 390;
      dialogueY = 300;
      dialogueWidth = 700;
      dialogueHeight = 700;
    } else if (currentImageIndex === 2) {
      dialogueX = 380;
      dialogueY = 350;
      dialogueWidth = 750;
      dialogueHeight = 700;
    } else if (currentImageIndex === 3) {
      dialogueX = 400;
      dialogueY = 250;
      dialogueWidth = 760;
      dialogueHeight = 700;
    } else if (currentImageIndex === 4) {
      dialogueX = 350;
      dialogueY = 350;
      dialogueWidth = 750;
      dialogueHeight = 700;
    } else if (currentImageIndex === 5) {
      dialogueX = 350;
      dialogueY = 350;
      dialogueWidth = 700;
      dialogueHeight = 700;
    } else if (currentImageIndex === 6) {
      dialogueX = 350;
      dialogueY = 350;
      dialogueWidth = 750;
      dialogueHeight = 700;
    }

    // Add more conditions as needed for other indices

    image(img, dialogueX, dialogueY, dialogueWidth, dialogueHeight);
  } else {
    // Draw all draggable objects only if the game has started
    if (gameStarted) {
      for (let i = 0; i < draggableObjects.length; i++) {
        draggableObjects[i].update();
        draggableObjects[i].show();
      }
    }
  }

  if (gameStarted) {
    for (let i = 0; i < draggableObjects.length; i++) {
      draggableObjects[i].update();
      draggableObjects[i].show();
    }
  }

  if (!gameStarted) {
    // Display start screen image covering the entire canvas
    image(startscreenImage, 0, 0, width, height);
  }
}

function startGame() {
  // Change game state
  gameStarted = true;

  // Remove play button
  playButton.remove();

  // Display the first seven images from the shuffled array
  for (let i = 0; i < min(7, nonInteractiveImages.length); i++) {
    let x = random(width);
    let y = random(height);
    let img = loadImage(nonInteractiveImages[i]);
    draggableObjects.push(new Draggable(img, x, y));
  }
}

function resetSketch() {
  // Reload the page to reset the sketch
  location.reload();
}

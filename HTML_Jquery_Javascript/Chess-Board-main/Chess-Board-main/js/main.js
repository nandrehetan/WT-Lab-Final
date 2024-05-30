let colors = {
  firstColor: "white",
  secondColor: "black",
};

const createLabel = (parent, index, type='V') => {
  // Creating a div object
  const div = document.createElement("div");

  // Setting up class attribute, and div content
  div.setAttribute("class", "label");
  div.innerHTML = type === 'V'? index / 8 + 1:String.fromCharCode(97 + index / 8);

  // Appending div to the parent container
  document.getElementById(parent).appendChild(div);
};

const createBlock = (parent, color) => {
  // Creating a div object
  let div = document.createElement("div");

  //   Setting up class attribute, and div background color
  div.setAttribute("class", "block");
  div.style.backgroundColor = color;

  // Appending div to the parent container
  document.getElementById(parent).appendChild(div);
};

const reverseColors = (color) => {
  let temp = color.firstColor;
  color.firstColor = color.secondColor;
  color.secondColor = temp;
};

const createChessBoard = () => {
  // Setting up chess board
  for (let index = 0; index < 64; index++) {
    if (index % 8 === 0) {
      createLabel("chessBoardLabel-h", index, 'H');
      createLabel("chessBoardLabel-v", index, 'V');
      reverseColors(colors);
    }

    const color = index % 2 === 0 ? colors.firstColor : colors.secondColor;
    createBlock("chessBoard", color);
  }
};

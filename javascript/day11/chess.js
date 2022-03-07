let container = document.getElementById('container')
for (let i= 1; i<9; i++) {
    let chessrows = document.createElement('div')

    chessrows.classList.add('chessrows')
      if (i % 2 == 0)
      {
          chessrows.style.flexDirection = 'row-reverse'
      }

    for (let inner= 1; inner < 9; inner++){
        
        let smallBoxes = document.createElement('div')
        smallBoxes.classList.add('boxes')

        if (inner % 2 == 0) 
        {
            smallBoxes.style.background = 'black'
        } 
        else 
        {
            smallBoxes.style.background = 'white'
        }
        chessrows.appendChild(smallBoxes)  
    }
    container.appendChild(chessrows)
}
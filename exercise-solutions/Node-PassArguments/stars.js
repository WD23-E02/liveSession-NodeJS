export default (stars = 10, header = "hi") => {
    console.log("*".repeat(stars));
    console.log(header);
    console.log("*".repeat(stars));
};


// Alternate solution

// function createStars(starsNumber = 10, text = "hi"){
//     let lineOne = '';
//     let lineTwo = text;
//     let lineThree = '';
//     for (let i = 0; i < starsNumber; i++){
//         lineOne += '*';
//         lineThree += '*';
//     }
//     let totalString = lineOne + '\n' + lineTwo + '\n' + lineThree;
//     console.log(totalString);
// }

// export default createStars;
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const res = [];
    for (let i= 0 ; i < img.length; i++) {
      const row = []
      for (let j = 0; j < img[i].length; j++) {
        let c = 0;
        let sum = img[i][j];
        if (isValidCell(img.length,img[i].length,i-1, j-1)) {
          c++;
          sum+=img[i-1][j-1];
        }
        if (isValidCell(img.length,img[i].length,i-1, j) ) {
          c++;
          sum+=img[i-1][j];
        }
        if(isValidCell(img.length,img[i].length,i-1, j+1)) {
          c++;
          sum+=img[i-1][j+1];
        }
        if(isValidCell(img.length,img[i].length,i, j-1) ) {
          c++;
          sum+=img[i][j-1];
        }
        if(isValidCell(img.length,img[i].length,i, j+1) ) {
          c++
          sum+=img[i][j+1];
        }
        if (isValidCell(img.length,img[i].length,i+1, j-1)) {
          c++;
          sum+=img[i+1][j-1];
        }
        if (isValidCell(img.length,img[i].length,i+1,j) ) {
          c++;
          sum+=img[i+1][j];
        }
        if (isValidCell(img.length,img[i].length,i+1, j+1)) {
          c++;
          sum+=img[i+1][j+1];
        }
        const ave = Math.floor(sum/(c+1));
        row.push(ave)
      }
      res.push(row)
    }
    return res;
};

const isValidCell = (maxRow,maxCol,x, y) => {
  return x>=0&&x<maxRow && y>=0&&y<maxCol;
}

// console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]))
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]))
module.exports = function solveSudoku(matrix) {

     let dict = [];
     for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
             if (matrix[i][j] === 0) {
                 dict.push([i,j]);
             }
         }
     }

     let flag = true;
     for (let k = 0; k < dict.length ; k++) {
       let row = dict[k][0];
       let col = dict[k][1];
       let status1 = false;
       let status2 = false;
       let status3 = false;
       if (flag) {
         var i = 1;
       }else{
         var i = matrix[row][col] + 1;
       }
       
       for ( ;status1 === false || status2 === false || status3 === false ; i++) {
         
         //проверка в 3х3
         let r = Math.floor(row / 3) * 3 ;
         let c = Math.floor(col / 3) * 3 ;
   
         outer: for( var sr = 0; sr < 3; sr++ ){
            for( var sc = 0; sc < 3; sc++ ){
               if( (i === matrix[r+sr][c+sc])){ //|| (i + 10 == matrix[r+sr][c+sc])
                 status1 = false ;
                 break outer;
               }else{
                 status1 = true ;
               }
            }
         }
 
         //проверка по строке
         for( let c = 0; c < 9; c++ )
        {
           if( (i === matrix[row][c])){ //|| (i + 10 == matrix[row][c])
             status2 = false ;
             break;
           }else{
             status2 = true;
           }
        }
 
 
       //проверка по столбцу 
       for( let r = 0; r < 9; r++ )
       {
          if( (i === matrix[r][col])){ //|| (i + 10 == matrix[r][col])
           status3 = false ;
           break;
          }else{
            status3 = true;
          }
       }
       flag = true;
       if (i > 9) {
        k = k-2;
        flag = false;
        matrix[row][col] = 0;
        break;
       } else if(status1 && status2 && status3){
        matrix[row][col] = i;
        break;
       }
       }
     }
     return matrix;
     
}
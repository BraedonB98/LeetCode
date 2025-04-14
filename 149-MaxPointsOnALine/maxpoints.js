/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let best = [] //[m, b, count] in mx + b form and count of points on that line
    let equations = {};//set equations.m = {b: count}

    // Loop through each point
    for(let i = 0; i < points.length; i++) {

       // Go through each point and calculate the slope and y intesect with every other point
        for(let j = i + 1; j < points.length; j++) {
            //if verticle line(how to deal with it?)
            let m = (points[j][1]-points[i][1])/(points[j][0] - points[i][0]);// Y2 - Y1 / X2 - X1 = slope
            let b = points[i][1] - m * points[i][0];// y = mx + b => b = y - mx
            if(!equations[m]) equations[m] = {};//if no existing slope
            if(!equations[m][b]) equations[m][b] = 2; //if no existing equation then that equation has at least 2 points
            else equations[m][b]++; //if existing equation then there is an additional point on line
            if(equations[m][b] > best[2]) best = [m, b, equations[m][b]];
        }
    }

};
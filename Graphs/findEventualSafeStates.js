/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let reverseGraph = Array.from({length:graph.length},() => new Array());
    let outDegree = new Array.fill(0);
    let queue = [];

    for(let i=0;i<graph.length;i++){
        for(let node of graph[i]){
            reverseGraph[node].push(i);
        }
        outDegree[i]++;
    }

    for(let i=0;i<outDegree.length;i++){
        if(outDegree[i] === 0){
            queue.push(i);
        }
    }

    while(queue.length > 0){
        const node = queue.shift();
        for(let )
    }


};
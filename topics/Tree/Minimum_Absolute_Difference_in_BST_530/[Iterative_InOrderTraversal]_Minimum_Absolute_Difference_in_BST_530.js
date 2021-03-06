// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth), which is O(N) in worst case of skewed tree 
//     and O(log(N)) for balanced Tree.
/**
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
    let stack = [],
        cur = root,
        prev = null,
        minDiff = Infinity;
    
    while (true) {
        if (cur != null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            if (stack.length === 0) {
                break;
            }
            cur = stack.pop();
            if (prev != null) {
                minDiff = Math.min(Math.abs(cur.val - prev.val), minDiff);
            }
            
            prev = cur;
            cur = cur.right;
        }
    }
    
    return minDiff;
}




// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
// Creates Binary Tree from passed array of items. Item's value will be stored in .val property of a node.
// If null is passed, then tree will store null and not a TreeNode with null value (null might occur even above the last line of nodes).
function createBinaryTreeFromArray(arr) {
    let rootNode = new TreeNode(arr.shift());
    
    let nodesInCurrentLine = [rootNode];
    let nodesInNextLine = [];
    
    // Copy array, so we won't modify passed array.
    arr = arr.slice();
    while (arr.length > 0) {
        while (nodesInCurrentLine.length > 0) {
            // Skip null nodes(it could be that we have null nodes not in the last line.
            if (nodesInCurrentLine[0] == null) {
                nodesInCurrentLine.shift();
                continue;
            }
            
            // Create node out of the next array value and push it to "nodesInNextLine".
            let nodeValue = arr.shift();
            nodesInCurrentLine[0].left = (nodeValue != null)
                ? new TreeNode(nodeValue)
                : null;
            
            nodesInNextLine.push(nodesInCurrentLine[0].left);
            
            // Create node out of the next array value and push it to "nodesInNextLine".
            nodeValue = arr.shift();
            nodesInCurrentLine[0].right = (nodeValue != null)
                ? new TreeNode(nodeValue)
                : null;
            nodesInNextLine.push(nodesInCurrentLine[0].right);
            
            nodesInCurrentLine.shift();
        }
        nodesInCurrentLine = nodesInNextLine;
        nodesInNextLine = [];
    }
    
    return rootNode;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(getMinimumDifference(createBinaryTreeFromArray([1, null, 3, 2])));

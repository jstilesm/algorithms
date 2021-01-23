/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//  RECURSIVE
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return dfs(root.left, root.right);
};

function dfs(leftNode, rightNode) {
  if (!leftNode && !rightNode) {
    return true;
  }
  if (
    (!leftNode && rightNode) ||
    (leftNode && !rightNode) ||
    leftNode.val !== rightNode.val
  ) {
    return false;
  }
  return (
    dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right)
  );
}

// ITERATIVE

var isSymmetric = function (root) {
  let queue = [];
  queue.push(root);
  queue.push(root);
  while (!queue.length < 1) {
    let t1 = queue.shift();
    let t2 = queue.shift();
    if (t1 === null && t1 === null) continue;
    if (t1 === null || t2 === null || t1.val !== t2.val) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
};

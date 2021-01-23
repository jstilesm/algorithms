/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//  RECURSIVE

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//ITERATIVE

var isSameTree = function (p, q) {
  let queue = [];
  queue.push(p);
  queue.push(q);

  while (queue.length > 1) {
    let t1 = queue.shift();
    let t2 = queue.shift();
    if (!t1 && !t2) continue;
    if ((!t1 && t2) || (!t2 && t1) || t1.val !== t2.val) {
      return false;
    }

    queue.push(t1.left);
    queue.push(t2.left);
    queue.push(t1.right);
    queue.push(t2.right);
  }
  return true;
};

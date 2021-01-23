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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root.val === val) {
    return root;
  }
  queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length > 0) {
    let t1 = queue.shift();
    let t2 = queue.shift();

    if (t1) {
      if (t1.val === val) {
        return t1;
      } else {
        queue.push(t1.left);
        queue.push(t1.right);
      }
      ("");
    }
    if (t2) {
      if (t2.val === val) {
        return t2;
      } else {
        queue.push(t2.left);
        queue.push(t2.right);
      }
    }
  }
  return null;
};

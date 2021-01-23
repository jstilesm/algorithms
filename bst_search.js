function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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

    if (t1.val === val) {
      let answer = t1;
      break;
    }
    if (t2.val === val) {
      let answer = t2;
      break;
    }

    if ((!t1.left && !t1.right) || (!t2.left && !t2.right)) {
      return null;
    }
    queue.push(t1.left);
    queue.push(t1.right);
    queue.push(t2.left);
    queue.push(t2.right);
  }
  return answer;
};

let r = [4, 2, 7, 1, 3];
let v = 2;
console.log(searchBST(r, v));

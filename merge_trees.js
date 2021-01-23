if (t1 || t2) {
        if (t2 !== null) {
            t1.val = t1.val + t2.val
        } 
        if (t1 === null)
             mergeTrees(t1,t1)
        }
        if (t2 === null) {
            
        }
         if (!t1.left) {
             // return t2.left 
            t1.left = t2.left
            mergeTrees(t1.left,t2.left)
        } else if (t2.left === null) {
            mergeTrees(t1.left,t2.left)
        } else if (t1.right === null) {
            t1.right = t2.right
            mergeTrees(t1.right,t2.right)
        } else if (t2.right === null) {
            mergeTrees(t1.right,t2.right)
            
        }else if (t1.left && t2.left) {
            t1.left.val = t1.left.val + t2.left.val
            // return t1
            mergeTrees(t1.left, t2.left)
        } else {
            t1.right.val = t1.right.val + t2.right.val
            mergeTrees(t1.right, t2.right)
        }
    }
    return t1
        
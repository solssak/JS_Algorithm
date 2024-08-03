function preorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

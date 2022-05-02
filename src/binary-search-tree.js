const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = addNewValue(this.nodeRoot, data);

    function addNewValue(currentNode, value) {

      if (!currentNode) {
        return new Node(value);
      }

      if (currentNode.data === value) {
        return currentNode;
      }

      if (value < currentNode.data) {
        currentNode.left = addNewValue(currentNode.left, value);
      } else {
        currentNode.right = addNewValue(currentNode.right, value);
      }

      return currentNode;
    }
  }

  has(data) {
    return searchValue(this.nodeRoot, data);

    function searchValue(node, value) {

      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return node.data <= value ? searchValue(node.right, value) : searchValue(node.left, value);
    }
  }

  find(data) {
    return findValue(this.nodeRoot, data);

    function findValue(node, value) {

      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return node.data <= value ? findValue(node.right, value) : findValue(node.left, value);
    }
  }

  remove(data) {
    this.nodeRoot = removeNode(this.nodeRoot, data);

    function removeNode(node, value) {

      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      }

      if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
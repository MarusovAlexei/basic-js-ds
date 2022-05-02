const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {

  if (!l.next) {
    return l;
  }

  if (l.value === k) {
    l = removeKFromList(l.next, k);
  }

  if (l.next.value !== k) {
    l.next = removeKFromList(l.next, k);
  } else {
    let nextNode = l.next;

    while (nextNode && nextNode.value === k) {
      nextNode = nextNode.next;
    }

    if (!nextNode || nextNode.value === k) {
      l.next = null;
    } else {
      l.next = removeKFromList(nextNode, k);
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};


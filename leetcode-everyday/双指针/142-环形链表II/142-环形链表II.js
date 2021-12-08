/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  do {
      if(!fast || !fast.next) return null;
      fast = fast.next.next;
      slow = slow.next;
  } while(fast !== slow)
  fast = head;
  while(slow !== fast) {
      slow = slow.next;
      fast = fast.next;
  }
  return fast;
};
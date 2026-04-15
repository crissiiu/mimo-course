package linked_list.e21_merge_two_sorted_list;

public class Solution1 {
    void main(String[] args) {
        ListNode list1 = new ListNode(1,
                new ListNode(2,
                        new ListNode(4)));

        ListNode list2 = new ListNode(1,
                new ListNode(3,
                        new ListNode(4,
                                new ListNode(5,
                                        new ListNode(5)))));
        ListNode result = mergeTwoLists(list1, list2);
        printList(result);
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        current.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }

    void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) {
                System.out.print(" -> ");
            }
            head = head.next;
        }
    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

package linked_list;

import java.util.HashMap;

public class Solution {
    void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1));
        cache.put(3, 3);
        System.out.println(cache.get(2));
        cache.put(4, 4);
        System.out.println(cache.get(3));
        System.out.println(cache.get(4));
    }
}

class LRUCache {
    int capacity;
    HashMap<Integer, Node> map = new HashMap<>();
    Node head = new Node(-1, -1);
    Node tail = new Node(-1, -1);

    public class Node {
        int key;
        int value;
        Node prev;
        Node next;

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
            this.prev = null;
            this.next = null;
        }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) {
            return -1;
        } else {
            update(map.get(key));
            return map.get(key).value;
        }
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node n = map.get(key);
            n.value = value;
            update(n);
        } else {
            if (map.size() == capacity) {
                Node n = tail.prev;
                delete(n);
                map.remove(n.key);
            }
            Node n = new Node(key, value);
            map.put(key, n);
            add(n);
        }
    }

    public void update(Node n) {
        delete(n);
        add(n);
    }

    public void delete(Node n) {
        Node prev = n.prev;
        Node next = n.next;
        prev.next = next;
        next.prev = prev;
    }

    public void add(Node n) {
        Node next = head.next;
        head.next = n;
        n.next = next;
        next.prev = n;
        n.prev = head;
    }
}
def swap(heap, first, second)
  tmp = heap[first]
  heap[first] = heap[second]
  heap[second] = tmp
end

def max_heapify(heap, heap_size, wrong_element)
  left = 2 * wrong_element + 1
  right = 2 * wrong_element + 2

  greater = (left < heap_size && heap[left] > heap[wrong_element]) ? left : wrong_element
  greater = right if right < heap_size && heap[right] > heap[greater]

  return if greater == wrong_element

  swap(heap, wrong_element, greater)
  max_heapify(heap, heap_size, greater)
end

heap = [8, 18, 14, 17, 12, 13, 11, 15, 16]

max_heapify(heap, heap.size, 0)

puts heap

# expected: 18 17 14 16 12 13 11 15 8

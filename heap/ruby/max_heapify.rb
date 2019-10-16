def max_heapify(heap, wrong_element)
  left = 2 * wrong_element + 1
  right = 2 * wrong_element + 2

  greater = (left <= heap.length && heap[left] > heap[wrong_element]) ? left : wrong_element
  greater = right if right <= heap.length && heap[right] > heap[greater]

  return if greater == wrong_element

  tmp = heap[wrong_element]
  heap[wrong_element] = heap[greater]
  heap[greater] = tmp
  max_heapify(heap, greater)
end

heap = [8, 18, 14, 17, 12, 13, 11, 15, 16]

max_heapify(heap, 0)

puts heap

# expected: 18 17 14 16 12 13 11 15 8

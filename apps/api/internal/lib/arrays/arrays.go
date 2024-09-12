package arrays

import (
	"math"
	"time"
)

// EZMap applies a function to each element of a slice and returns a new slice with the results. similar to Array.prototype.map in JavaScript.
func EZMap[T any, M any](a []T, f func(T) M) []M {
	n := make([]M, len(a))

	for i, element := range a {
		n[i] = f(element)
	}

	return n
}

// EZSet applies a function to each element of a slice and returns a map with the specified key and value, similar to new Set(array.map()) in JavaScript.

func EZSet[T any, K comparable](data []T, extractKey func(T) K) map[K]struct{} {
	result := make(map[K]struct{})

	for _, element := range data {
		key := extractKey(element)
		result[key] = struct{}{} // struct{} is a zero-size value in Go
	}

	return result
}

func EZIndexOf[T comparable](arr []T, el T) int {
	for i, v := range arr {
		if v == el {
			return i
		}
	}

	return -1
}

func EZLastIndexOf[T comparable](arr []T, el T) int {
	for i := len(arr) - 1; i >= 0; i-- {
		if arr[i] == el {
			return i
		}
	}

	return -1
}

func EZFilter[T any](input []T, comparator func(el T) bool) []T {
	res := []T{}

	for _, el := range input {
		if comparator(el) {
			res = append(res, el)
		}
	}

	return res
}

func EZPartition[T any](input []T, batchSize int) [][]T {
	var result [][]T

	for i := 0; i < len(input); i += batchSize {
		end := i + batchSize
		if end > len(input) {
			end = len(input)
		}
		result = append(result, input[i:end])
	}

	return result
}

// Returns first element and its index, of input for which comparator(N) is true.
// Returns null pointer and -1 if no element was found.
func EZFind[T any](input []T, comparator func(el T) bool) (T, int) {
	var v T

	for ind, el := range input {
		if comparator(el) {
			return el, ind
		}
	}

	return v, -1
}

func Truncate[T any](input []T, limit int) []T {
	normalizedLimit := int(math.Min(float64(len(input)), float64(limit)))
	res := make([]T, normalizedLimit)
	for x := 0; x < normalizedLimit; x++ {
		res[x] = input[x]
	}

	return res
}

func EZContains[T comparable](input []T, el T) bool {
	for _, sliceEl := range input {
		if sliceEl == el {
			return true
		}
	}

	return false
}

func EZSum[T any, V int64 | float64 | int | time.Duration](input []T, f func(el T) V) V {
	var sum V

	for _, el := range input {
		sum += f(el)
	}

	return sum
}

func EZConcat[T any](first []T, second []T) []T {
	n := len(first)
	return append(first[:n:n], second...)
}

func EZEvery(input []string, predicate func(value string) bool) bool {
	for _, v := range input {
		if !predicate(v) {
			return false
		}
	}
	return true
}

func EZSome[T any](arr []T, predicate func(T) bool) bool {
	for _, element := range arr {
		if predicate(element) {
			return true
		}
	}
	return false
}

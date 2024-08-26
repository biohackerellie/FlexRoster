package arrays

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestEZContains(t *testing.T) {
	// given
	assert := assert.New(t)
	input := []int{1, 2, 3}

	// when
	res := EZContains(input, 2)

	// assert
	assert.True(res)
}

func TestEZContainsWithFalsyValues(t *testing.T) {
	// given
	assert := assert.New(t)
	input := []int{1, 2, 3}

	// when
	res := EZContains(input, 15)

	// assert
	assert.False(res)
}

func TestEZSum(t *testing.T) {
	// given
	type testStruct struct {
		V int
	}
	assert := assert.New(t)
	input := make([]*testStruct, 4)
	for x := 0; x < 4; x++ {
		input[x] = &testStruct{V: x}
	}

	// when
	res := EZSum(input, func(el *testStruct) int64 {
		return int64(el.V)
	})

	// assert
	assert.Equal(int64(6), res)
}

func TestEZFindWithNoMatch(t *testing.T) {
	// given
	type testStruct struct {
		V int
	}
	assert := assert.New(t)
	input := make([]*testStruct, 4)
	for x := 0; x < 4; x++ {
		input[x] = &testStruct{V: x}
	}

	// when
	res, index := EZFind[*testStruct](input, func(el *testStruct) bool {
		return el.V > 15
	})

	// assert
	assert.Equal(index, -1)
	assert.Nil(res)
}

func TestTruncate(t *testing.T) {
	// given
	assert := assert.New(t)
	input := make([]int, 10)
	for x := 0; x < 10; x++ {
		input[x] = x
	}

	// when
	res := Truncate(input, 3)

	// assert
	assert.Len(res, 3)
	assert.Contains(res, 0, 1, 2)
}

func TestEZMap(t *testing.T) {
	// given
	assert := assert.New(t)
	input := make([]int, 10)
	for x := 0; x < 10; x++ {
		input[x] = x
	}

	// when
	res := EZMap(input, func(el int) int {
		return el * 2
	})

	for i, el := range res {
		assert.Equal(el, input[i]*2)
	}
}

func TestEZFilter(t *testing.T) {
	// given
	assert := assert.New(t)
	input := make([]int, 10)
	for x := 0; x < 10; x++ {
		input[x] = x
	}

	// when
	res := EZFilter(input, func(el int) bool {
		return el%2 == 0
	})

	for i, el := range res {
		assert.Equal(el, input[i*2])
	}
}

func TestEZPartition(t *testing.T) {
	// given
	assert := assert.New(t)
	input := make([]int, 4)
	for x := 0; x < 4; x++ {
		input[x] = x
	}

	// when
	res := EZPartition(input, 2)

	// assert
	assert.Len(res, 2)
	for _, element := range res {
		assert.Len(element, 2)
	}
}

func TestEZPartitionWithSmallSlice(t *testing.T) {
	// given
	assert := assert.New(t)
	input := make([]int, 4)
	for x := 0; x < 4; x++ {
		input[x] = x
	}

	// when
	res := EZPartition(input, 5)

	// assert
	assert.Len(res, 1)
	for _, element := range res {
		assert.Len(element, 4)
	}
}

func TestEZFind(t *testing.T) {
	// given
	type testStruct struct {
		V int
	}
	assert := assert.New(t)
	input := make([]testStruct, 4)
	for x := 0; x < 4; x++ {
		input[x] = testStruct{V: x}
	}

	// when
	res, index := EZFind[testStruct](input, func(el testStruct) bool {
		return el.V > 2
	})

	// assert
	assert.Equal(index, len(input)-1)
	assert.NotEmpty(res)
	assert.Equal(res.V, 3)
}

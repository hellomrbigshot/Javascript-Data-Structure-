class Queue {
	constructor () { // 创建队列
		this.queue = []
	}

	clearQueue () { // 清空队列
		this.queue = []
	}

	queueEmpty () { // 判空队列
		return this.queue.length === 0
	}

	queueLength () {  // 队列长度
		return this.queue.length
	}

	enQueue (el) {  // 新元素入队
		this.queue.push(el)
	}

	deQueue () { // 首元素出队
		return this.queue.shift()
	}

	printQueue () { // 打印队列
		this.queue.forEach(value => console.log(value + '\n'))
	}

}
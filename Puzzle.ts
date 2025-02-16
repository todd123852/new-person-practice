import { defineStore } from "pinia"
import { reactive, ref } from "vue";

export const usePuzzleStore = defineStore('Puzzle', () => {
    let readyGo = ref(true)
    let isComplete = ref(false)
    const puzzles = reactive([
        {id: 0, top: '0', left: '0', position: '0 0', opacity: 1 ,index:0 },
        {id: 1, top: '0', left: '33%', position: '50% 0' ,opacity: 1 ,index: 1},
        {id: 2, top: '0', left: '66%', position: '100% 0' ,opacity: 1 ,index:2 },
        {id: 3, top: '33%', left: '0', position: '0 50%' ,opacity: 1 ,index:3 },
        {id: 4, top: '33%', left: '33%', position: '50% 50%' ,opacity: 1 ,index:4 },
        {id: 5, top: '33%', left: '66%', position: '100% 50%' ,opacity: 1 ,index:5 },
        {id: 6, top: '66%', left: '0', position: '0 100%' ,opacity: 1 ,index:6 },
        {id: 7, top: '66%', left: '33%', position: '50% 100%' ,opacity: 1 ,index:7 },
        {id: 8, top: '66%', left: '66%', position: '100% 100%' ,opacity: 0 ,index:8},
    ])
    const originalPositions = [
        { top: '0', left: '0' },
        { top: '0', left: '33%' },
        { top: '0', left: '66%' },
        { top: '33%', left: '0' },
        { top: '33%', left: '33%' },
        { top: '33%', left: '66%' },
        { top: '66%', left: '0' },
        { top: '66%', left: '33%' },
        { top: '66%', left: '66%' },
    ];
    interface Puzzle {
        id: number;
        top: string;
        left: string;
        position: string;
        opacity: number;
        index: number;
    }

    function storecheckIfCompleted() {
        return puzzles.every(piece => piece.id === piece.index)
    }
 
    // 更换位置逻辑 id 是不会变得， index在每次交换位置后交换，因此index就是拼图的位置
    function storechange(pieceIndex:number, pieceID:number) {
        if (canExchange(pieceIndex)) {
            const tempTop = puzzles[8].top;
            const tempLeft = puzzles[8].left;
    
            puzzles[8].top = puzzles[pieceID].top;
            puzzles[8].left = puzzles[pieceID].left;
    
            puzzles[pieceID].top = tempTop;
            puzzles[pieceID].left = tempLeft;
    
            [puzzles[pieceID].index, puzzles[8].index] = [puzzles[8].index, puzzles[pieceID].index]   

            // 每次成功交换后进行检查，完成之后最后一块拼图显示
            isComplete.value = storecheckIfCompleted()
            if (isComplete.value) {
                puzzles[8].opacity = 1;
                stopTimer()
            }
        } else {
            console.log('不能换');
        }
    }
    // 检查是否可以交换
    function canExchange (targetIndex:number) {
        // const targetIndex =  puzzles[pieceID].index
        const emptyIndex = puzzles[8].index
        // 上下交换的逻辑
        if ( Math.abs(targetIndex - puzzles[8].index) === 3) {
            return true
        } 
        // 左边交换的逻辑
        const leftChange = puzzles[8].index - 1 === targetIndex && emptyIndex % 3 !== 0
        // 右边交换的逻辑
        const rightChange = puzzles[8].index + 1 === targetIndex && targetIndex % 3 !== 0
        //rightChange === targetIndex && !leftSet.has(puzzles[8].index)
        return leftChange || rightChange
    }
    // 获取对应index的ID
    function storegetPuzzleID(index:number) {
        return puzzles.findIndex(piece => piece.index === index)
    }

    // 上下左右移动
    function storearrowControl (event:any) {
        switch (event.key) {      
        // 处理向上按键事件
        case 'ArrowUp':
            const UpIndex = puzzles[8].index + 3
            if (UpIndex < 9) {
                const UpId = storegetPuzzleID(UpIndex);
                storechange(UpIndex, UpId) 
            }
            break

        // 处理向下按键事件
        case 'ArrowDown':
            const downtIndex = puzzles[8].index - 3
            if (downtIndex >= 0) {
                const downId = storegetPuzzleID(downtIndex);
                storechange(downtIndex, downId) 
            }
            
            break;

        // 处理向右按键事件
        case 'ArrowRight':
            const leftIndex = puzzles[8].index - 1;
            if (leftIndex >= 0) { // 确保不越界
                const leftId = storegetPuzzleID(leftIndex);
                storechange(leftIndex, leftId);
            }
            break;


        // 处理向左按键事件
        case 'ArrowLeft':
            const rightIndex = puzzles[8].index + 1;
            if (rightIndex < 9) { // 确保不越界
                const rightId = storegetPuzzleID(rightIndex);
                storechange(rightIndex, rightId);
            }
            break;

        // 其他按键事件处理
        default:
            break;
        }
    }
    // 防抖
    function debounce(fn:any, time:number) {
        let timer:any // 声明一个计时器的变量
        return function () {
            // 有计时器吗? 有就清除
            if (timer) clearTimeout(timer)
            // 清除完就添加定时器，过了0.5秒之后调用
            timer = setTimeout (function () {
                fn() // shuffle
            },time)
        }
    }
    
    function storeshufflePuzzles () {
        readyGo.value = false;
        startTimer();
        debouncedShuffle();
    } 

    // 随机洗牌
    const shuffle =  () => {
        puzzles[puzzles.length - 1].opacity = 0
        puzzles.map(piece => piece.left = piece.top = '33%')
        setTimeout(() => {
            // 洗牌算法
            for (let i = puzzles.length - 2; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [puzzles[i].index, puzzles[j].index] = [puzzles[j].index, puzzles[i].index];
              }

            let inversions = 0;   
            // 检查拼图是否有解
            for (let i = 0; i < puzzles.length - 1; i++) {
                for (let j = i + 1; j < puzzles.length; j++) {
                    if (puzzles[i].index > puzzles[j].index) {
                        inversions++;
                    }
                }
            }
            if (inversions % 2 !== 0) {
                let last =  puzzles.length;
                [puzzles[last - 3].index, puzzles[last - 2].index] = [puzzles[last - 2].index, puzzles[last - 3].index]
            }
            updatePuzzlePositions()
        }, 600)
    }
    const debouncedShuffle = debounce(shuffle, 400);
    function updatePuzzlePositions () {
        puzzles.forEach( piece => {
            piece.top = originalPositions[piece.index].top
            piece.left = originalPositions[piece.index].left
        })
    }
    // 展示/完成时间
        let timerId:any = null; // 存储 setInterval 的返回值
        let startTime:any = null; 

        function startTimer() {
            clearInterval(timerId);
            startTime = new Date().getTime(); // 记录开始时间
            timerId = setInterval(updateTime, 1000); // 每秒更新一次时间
        }

        let hours = ref('00'), minutes = ref('00'), seconds = ref('00')
        function updateTime() {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime; // 计算已过去的时间（毫秒）

            const sec = Math.floor(elapsedTime / 1000);
            const min = Math.floor(sec / 60);
            const ho = Math.floor(min / 60);

            hours.value = String(ho).padStart(2, '0');
            minutes.value = String(min % 60).padStart(2, '0');
            seconds.value = String(sec % 60).padStart(2, '0');
        }

        function stopTimer() {
            clearInterval(timerId); // 清除定时器
        }
        function cleanTimer() {
            isComplete.value = false
            readyGo.value = true;
            clearInterval(timerId); // 清除定时器
            hours.value = '00'
            minutes.value = '00'
            seconds.value = '00'
        }
    return {readyGo,isComplete,cleanTimer,storeshufflePuzzles,stopTimer,storearrowControl,storechange,puzzles,hours, minutes, seconds}
})
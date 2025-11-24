import { useState, useEffect } from 'react'

// import './App.css'

const Timer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중 ing...')
        }, 1000);


        return () => {
            clearInterval(timer);
            console.log('타이머 종료?')
        }
    });





    return (
        <>
            <p>타이머 시작</p>
        </>
    )

}


function UseEffect() {

    useEffect(() => {
        console.log('처음만 실행')
    }, []);



    const [showTimer, setShowTimer] = useState(false);

    return (



        <div>

            {/* showTimer가 true일 때만 <Timer/>를 보여줌 */}
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>토글 버튼</button>
        </div>

    )
}


//useEffect

// 1.화면이 랜더링될 때마다 매번 실행됨
// useEffect(() => {
//   console.log('헬로')
// });


// 2. 첫 실행 후 리스트 추가될 때만 실행
// useEffect(() => {
//   console.log('리스트 추가됨')
// }, [todos]);


// 3.첫 랜더링되었을 때만 실행 할 때
// useEffect(() => {
//   console.log('처음만 실행')
// }, []);






export default UseEffect

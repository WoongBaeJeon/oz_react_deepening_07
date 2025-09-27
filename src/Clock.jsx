import { useEffect, useState } from 'react';

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const [realTime, setRealTime] = useState(new Date());
  const [run, setRun] = useState(true);

  useEffect(() => {
    let timer;

    if (run) {
      timer = setInterval(() => {
        setRealTime(new Date());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [run]);

  function StopWatch() {
    setRun((prev) => !prev);
    console.log(run);
  }
  const formatTime = (num) => String(num).padStart(2, '0');
  const hour = formatTime(realTime.getHours());
  const min = formatTime(realTime.getMinutes());
  const sec = formatTime(realTime.getSeconds());

  return (
    <>
      <div className="timer-container">
        <div className="realTime">
          <h1>
            {hour} : {min} : {sec}
          </h1>
        </div>
        <div className="stopWatch-container">
          <button onClick={StopWatch} className="stopWatch">
            <div>{run ? 'Timer 정지' : 'Timer 시작'}</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Clock;

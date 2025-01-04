import logs from "./logs";
import {useState, useEffect, useRef} from "react";
import styles from "./Loading.module.css"

export default function Loading({ onComplete }) {
  const logEndRef = useRef(null)
  const [visibleLogs, setVisibleLogs] = useState("");
  
  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length - 1) {
        setVisibleLogs((prevLogs) => `${prevLogs}${logs[logIndex]}\n`);
        logIndex++;
        logEndRef.current.scrollIntoView()
      } else {
        onComplete();
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <div className="font-mono">
        <pre>{visibleLogs}</pre>
      </div>
      <div ref={logEndRef}></div>
    </>
  );
}

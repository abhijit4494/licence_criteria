
// import { qaData } from "../component/qaData"
// import { useState, useEffect } from "react";


// const bc = new BroadcastChannel("meeting_channel");

// export default function PresenterDashboard() {
//   const [input, setInput] = useState("");
//   const [answer, setAnswer] = useState("");

//   useEffect(() => {
//     const text = input.toLowerCase().trim();
//     const found = qaData.find((item) =>
//       item.keywords.some((k) => text.includes(k.toLowerCase()))
//     );

//     const currentAnswer = found ? found.answer : "No answer found yet...";
//     setAnswer(currentAnswer);

//     // This sends the data to the Electron window
//     bc.postMessage({ 
//       type: "SYNC", 
//       payload: { que: input, ans: currentAnswer } 
//     });
//   }, [input]);

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial" }}>
//       <h1>🎤 Presenter Dashboard</h1>
//       <input
//         style={{ width: "100%", padding: "15px", fontSize: "18px" }}
//         placeholder="Type your question here..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <div style={{ marginTop: "20px", color: "gray" }}>
//         <strong>Previewing Answer:</strong> {answer}
//       </div>
//     </div>
//   );
// }
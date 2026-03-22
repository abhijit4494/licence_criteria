import { useState } from "react";

export default function AddQa({ qaList, setQaList }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addQa = () => {
    if (!question || !answer) return;
    setQaList([...qaList, { question, answer }]);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input
        placeholder="New question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        placeholder="New answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={addQa}>Add</button>
    </div>
  );
}

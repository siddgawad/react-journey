import {useState} from "react";
import Header from "../src/components/Header.jsx";
import Form from "../src/components/Form.jsx";
import Table from "../src/components/Table.jsx";


export default function App() {
  const [draft, setDraft] = useState({ petName: "", name: "", email: "" });
  const [submissions, setSubmissions] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit() {
    setSubmissions([...submissions, draft]);
    setDraft({ petName: "", name: "", email: "" });
    setShowTable(true);
  }

  return (
    <div className="min-h-screen">
      <Header />
      {showTable ? (
        <Table rows={submissions} onBack={() => setShowTable(false)}  />
      ) : (
        <Form formData={draft} setFormData={setDraft} onSubmit={handleSubmit} errors={errors} setErrors={setErrors} />
      )}
    </div>
  );
}
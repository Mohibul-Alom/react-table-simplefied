import "./App.css";
import Table from "./component/Table";

function App() {
  const columns = [
    {
      title: "name", //string
      dataIndex: ["name"], //array of strings
      key: "name",
    },
    {
      title: "age", //string
      dataIndex: ["age"], //array of strings
      key: "age",
    },
    {
      title: "address", //string
      dataIndex: ["address"], //array of strings
      key: "address",
    },
    {
      title: "email", //string
      dataIndex: ["contact", "email"], //array of strings
      key: "email",
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "John 1",
      age: 30,
      contact: {
        email: 'example1@example.com',
        phoneNumber: '123 456 789'
      },
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "John 2",
      age: 31,
      contact: {
        email: 'example2@example.com',
        phoneNumber: '123 456 789'
      },
      address: "New York No. 2 Lake Park",
    },
    {
      key: "3",
      name: "John 3",
      age: 32,
      contact: {
        email: 'example3@example.com',
        phoneNumber: '123 456 789'
      },
      address: "New York No. 3 Lake Park",
    }
  ];

  return (
    <div className="App">
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default App;

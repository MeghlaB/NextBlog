import Card from "./Components/Card";
const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data)

  return (
   <div>
    <h1 className="text-2xl font-bold text-center m-5 underline text-blue-500">Home Page</h1>
     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mb-3">
      {data.map((post) => (
        <Card key={post.id} title={post.title} description={post.body} id={post.id} />
      ))}
    </div>
   </div>
  );
};

export default Home;
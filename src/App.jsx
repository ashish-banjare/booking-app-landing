import Home from "./pages/Home";

function App() {
    const name = "Ashish"
    return(
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to your first React application.</p>
            <Home />;
        </div>
    )
}


export default App;
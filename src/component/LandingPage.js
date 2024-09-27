import './navbar.css'

const LandingPage = ()=>{
    return (
        <div>
             <div className='landingpage'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8F362_aZjP7UevA0DMXIuta0Z1BzXxVH6g&s" width={350}></img>

                <div className='contentdiv'>
                    <h1>Welcome to Our Website!</h1>
                    <p>This is a landing page with a simple header and image.</p>
                    <button >About Us</button>
                </div>
             </div>
        </div>
    )
}

export default LandingPage;
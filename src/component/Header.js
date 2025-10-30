 import Form from './Form';
 import './Header.css'
 function Header({ searchTerm, setSearchTerm ,darkmode , setDarkmode }){
    return(
       <div className='header'>
            <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <button className='toggle-btn' onClick={() => setDarkmode(!darkmode)}>
               {darkmode ? "☀️" : "🌙"}
            </button>
       </div>
    )
}
export default Header
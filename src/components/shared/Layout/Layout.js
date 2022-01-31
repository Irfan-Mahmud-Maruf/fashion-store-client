import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'


const Layout = ({ className, children }) => {
	return (
		<>
			<header>
				<Navigation />
			</header>

			<main className={ `fg-page ${className?` page-${className}`:'' } `} >
				{children}
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	) 
}


export default Layout
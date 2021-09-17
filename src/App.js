import './main.css';
// import Header from './components/Header';
import Asidenav from './components/Asidenav';
import Aside2 from './components/Aside2';
import Content from './components/Content';
// import Footer from './components/Footer';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Stepper from './components/Steper';

//useContext
import StepState from './context/Step/StepState';

function App() {
	return (
		<StepState>
			<div className="Grilla">
				<Menu />
				<Asidenav />
				<Content />
				<Stepper />
				<Modal />
			</div>
		</StepState>
	);
}

export default App;

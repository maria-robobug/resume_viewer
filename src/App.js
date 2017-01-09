import React from 'react';
import $ from 'jquery';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			foo: 'bar',
			resumeData: {}
		};
	}
	
	getResumeData () {
		$.ajax({
			url: 'http://localhost:3000/resumeData.json',
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({resumeData: data});
			},
			error: (xhr, status, error) => {
				alert(error);
			}
		});
	}
	
	componentDidMount () {
		this.getResumeData();
	}
	
	render () {
		return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
				<About />
				<Resume />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
      </div>
		);
	}
}

export default App;

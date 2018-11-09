import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Amourithm',
        biography: '',
      },
      image: 'https://images.onlymyhealth.com/imported/images/2014/September/29_Sep_2014/happy-couple.jpg',
      quote: {
        content: 'Find your match',
        source: 'Alex Dawson'
      }
      
    };
  }
  render() {
    return(
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <p className="Bio">{props.person.biography}</p>
        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>
        
      </div>
    );
}

export default Heading;

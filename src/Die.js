import React from 'react';
import './Die.css'

class Die extends React.Component {
  constructor(props) {
      super(props);
      this.sides = [
          "translateZ(-100px) rotateY(0deg)",
          "translateZ(-100px) rotateX(-180deg)",
          "translateZ(-100px) rotateY(-90deg)",
          "translateZ(-100px) rotateY(90deg)",
          "translateZ(-100px) rotateX(-90deg)",
          "translateZ(-100px) rotateX(90deg)"
      ];
      this.handleClick = this.handleClick.bind(this);
      this.render = this.render.bind(this);
      this.state = {
        rolling: false,
      }
  }

  handleClick(e) {
    const { id } = this.props;
    console.log('id', id);
    var die = e.target.parentNode;
    console.log('e.target', e.target.parentNode);
    console.log('die', die);
    var sides = this.sides

    this.setState({ rolling: true });

    setTimeout(() => {
      var roll = Math.floor(Math.random() * (sides.length))
      this.setState({ rolling: false });
      die.style.transform = sides[roll];
    }, 750);
  }

  render() {
    const { id, sides } = this.props;
    const { rolling } = this.state;
    let divs = this.sides.map((side, index) => {
      return <div key={`side${index}`} className="side">{sides[index]}</div>
    });

    return (
      <div className="die-container" onClick={ this.handleClick }>
        <div id={id} className={`theDice d${this.sides.length} ${rolling && 'rolling'}`}>
          { divs }
        </div>
      </div>
    );
  }
}

export default Die;

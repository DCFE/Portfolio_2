import React, { Component } from 'react';

class Monster extends Component {

  monsterTypes() {

    var monsterTypesArray = [];

    console.log(this.props.monsterData.types.length);

    for (var i = 0 ; i < this.props.monsterData.types.length; i++) {

      monsterTypesArray.push(
        <div key={"key" + i}>{this.props.monsterData.types[i].type.name}</div>
      );
    
    }
     
    return monsterTypesArray;

  }

  render() {
	/*console.log(this.props.monsterData);
	console.log(this.props.monsterData.sprites.front_default); 
	console.log(this.props.monsterDescription);*/   
    return (
      <div className="monster">
      	<div className="monster-sprite">
      		<img src={this.props.monsterData.sprites.front_default} alt={this.props.monsterData.name}/>
      	</div>
      	<div className="monster-name">
      		Name: {this.props.monsterData.name}
      	</div>
      	<div className="monster-number">
      		Pokémon Number: {this.props.monsterData.id}
      	</div>
      	<div className="monster-description">
      		Description: {this.props.monsterDescription.flavor_text_entries[53].flavor_text}
      	</div>
      	<div className="monster-height">
      		Height: {this.props.monsterData.height}
      	</div>
      	<div className="monster-weight">
      		Weight: {this.props.monsterData.weight}
      	</div>
      	<div className="monster-types">
      		{this.monsterTypes()}
      	</div>

      </div>
    );

  }
}

export default Monster;

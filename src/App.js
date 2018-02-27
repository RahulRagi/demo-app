import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        data: [
          {id:1, name: 'item 1'},
          {id:2, name: 'item 2'},
          {id:3, name: 'item 3'},
          {id:4, name: 'item 4'},
          {id:5, name: 'item 5'},
        ],
        editing: false,
        newItem:''
      }

      this.handleChange = this.handleChange.bind(this);
      this.addItem = this.addItem.bind(this);


    }
    delete(item){
      const newState = this.state.data.slice();
      if (newState.indexOf(item) > -1) {
        newState.splice(newState.indexOf(item), 1);
        this.setState({data: newState});
      }
    }

    enableEditing(){
    this.setState({ editing: true });

  }

    enableEditingDone(e){
      console.log("editing is done");
      if(e.keyCode == 13){
        this.setState({editing: false, changedText: this.item.name});

      } else{

      }
    }

    handleChange(e){
      this.setState({newItem:e.target.value})
    }
    addItem(e){
      debugger
      if(this.state.newItem === ""){
        return;
      }
      e.preventDefault();
      this.setState(function(prevState){
        let len = prevState.length;
        var x =  prevState.data.push({id:len +1,name:this.state.newItem});
        this.state.newItem="";
        return x;
      });
//dshfdajsfalsdf
    }
    handleEditingChange(event){
    var _changedText=  event.target.value;
    this.setState ({ changedText: _changedText })
    }

    render(){
      const listItem = this.state.data.map((item)=>{
          return <div key={item.id} >
          <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
          <button onClick={this.enableEditing.bind(this, item)}>Edit</button>
          {this.state.editing ? <input tye="text" id={item.id} onChange = {this.handleEditingChange.bind(this)}
          onKeyDown = {this.enableEditingDone.bind(this)} value= {this.state.changedText}></input>: ""}
        </div>


      })

      return <div>
      <h3>demo-app</h3>
    <form>
      <input  type="text" onChange={this.handleChange} value={this.state.newItem}/>
      <button onClick={this.addItem}>
        Add Item
      </button>
    </form><br />
          {listItem}
      </div>

    }
  }


export default App;

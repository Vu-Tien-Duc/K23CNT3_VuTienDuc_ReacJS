import React, { Component } from 'react'

export default class VtdEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdName:"Vũ Đức",
            vtdAge: 20,
            vtdGender:"Male",
            vtdCourse:"CSS3"
        }
    }

    // hàm sự kiện change
    vtdHandleChage = (event)=>{
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]:value
        })
    }

    vtdHandleSubmit = (event)=>{
        event.preventDefault()
        alert(this.state.vtdName + "\n" 
            + this.state.vtdAge + "\n" 
            + this.state.vtdGender + "\n" 
            + this.state.vtdCourse )

         // Chuyển dữ liệu trên form lên App component (TvcApp);
         this.props.onVtdHandleSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <div>
            <label htmlFor='vtdName' >Student Name:</label>
            <input type='text' name='vtdName' id='vtdName'
            value={this.state.vtdName}
           
            onChange={this.vtdHandleChage}  
            className='mx-2 text-center'/>
        </div>
        <div>
            <label htmlFor='vtdAge' >Student Name:</label>
            <input type='text' name='vtdAge' id='vtdAge'
            value={this.state.vtdAge}
        
            onChange={this.vtdHandleChage} 
              className='mx-2 text-center '/>
        </div>
        
        <div>
  
            <label htmlFor='vtdGender' >Student Gender:</label>
            <input type='radio' name='vtdGender' id='vtdMale' className='mx-2'
            value={'Male'}
            checked={this.state.vtdGender === 'Male'}
            onChange={this.vtdHandleChage} />
            <label htmlFor='vtdMale'>Male</label>
    

     
          
           
                <input type='radio' name='vtdGender' id='vtdFemale' className='mx-2'
                value={'Female'}
                checked={this.state.vtdGender === 'Female'}
                onChange={this.vtdHandleChage} />
           
                <label htmlFor='vtdFemale'>Female</label>
            

         
                <input type='radio' name='vtdGender' id='vtdNone' className='mx-2'
                value={'None'}
                checked={this.state.vtdGender === 'None'}
                onChange={this.vtdHandleChage}/>
                <label htmlFor='vtdNone'>None</label>
         
            </div>

       
        <div>
        <label>
                    Chọn khóa học:
                    <select name='vtdCourse' id='vtdCourse'  className='mx-2 text-center '
                     value={this.state.vtdCourse} onChange={this.vtdHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
        </div>
        <button onClick={this.vtdHandleSubmit} className='btn btn-primary'>button</button>
      </div>
    )
  }
}

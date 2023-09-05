import React from "react";

class ErrorBoundary extends React.Component{
   constructor(props){
    super(props)
    this.state={
        error:false
    }
   }

   static getDerivedStateFromError(){
            this.setState({error:true})
   }

   componentDidCatch(error,errorInfo){
       console.log(error,errorInfo)
   }

   render(){
    
        if(this.state.error){
            return(<div>There is some error!!</div>)
        }

        return this.props.children
    
   }
}

export default ErrorBoundary;
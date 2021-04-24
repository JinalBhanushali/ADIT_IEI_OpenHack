
import React from 'react';


function Post({posts,search,Arr}) {
  
    return (
     <div className=" mx-md-5  mx-3 postTable">
        <table className="table">
          <thead>
            <tr className=" text-center">
              <th scope="col"  className="border-right border-left">No.</th>
              <th scope="col"  className="border-right">Problem ID</th>
              <th scope="col" className="border-right">Problem Statement</th>
              <th scope="col" className="border-right">Problem Description</th>
              <th scope="col" className="border-right">Details</th>
            </tr>
          </thead>
          <tbody>
           {
              (search === "" || search==="S" ) ?  posts.map((item,index)=>( 
                      <tr>
                          <th scope="row" key={index} className="border-right border-left  text-center border-bottom">{item.no}</th>
                          <td className="border-right  text-center border-bottom">{item.id}</td>
                          <td className="border-right border-bottom">{item.statement} </td>
                          <td className="border-right border-bottom">{item.description}</td>
                          <td className="border-right border-bottom"><button type="button" class="btn btn-primary" data-toggle="modal" data-target={item.modal}>Deatils</button></td>
                      </tr>  
                 
              )) :  Arr.filter((val)=>{
                      if(val.id.includes(search)){
                          return val  
                        }
                      })
                      .map((item,index)=>(             
                        <tr>
                            <th scope="row" key={index} className="border-right border-left  text-center border-bottom">{item.no}</th>
                            <td className="border-right  text-center border-bottom">{item.id}</td>
                            <td className="border-right border-bottom">{item.statement} </td>
                            <td className="border-right border-bottom">{item.description}</td>
                            <td className="border-right border-bottom"><button type="button" class="btn btn-primary" data-toggle="modal" data-target={item.modal}>Deatils</button></td>
                        </tr>  
                ))
              
           }  
          </tbody>
        </table>
      </div>
    );
}
export default Post;
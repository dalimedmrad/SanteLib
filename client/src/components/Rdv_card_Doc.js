import React ,{useState}from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { deleterdv, editrdv } from '../Redux/actions/rdv'
import {Link} from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
const Rdv_card_Doc = ({el}) => {
  
  const [rdvApproved, setrdvApproved] = useState({approved:el.approved,doc_name:el.doc_name,doc_id:el.doc_id,client_id:el.client_id,client_name:el.client_name,date:el.date})
  const dispatch=useDispatch()
    const rdvProfile=useSelector(state=>state.rdvReducer.result)
    console.log(el)
    const handleContact=async()=>{
      {await setrdvApproved({approved:!rdvApproved.approved})
          dispatch(editrdv(el._id,rdvApproved))}
        }
    
    return (
        <div className='card-shadow2'>
            <div className="ui cards mx-2 my-2">
  <div className="card">
    <div className="content">
      {el.approved?
      <CheckIcon />
      :null}
      <div className="header">
        {el.client_name}
        
      </div>
      
      <div className="description">
        {el.date}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <button className="ui basic green button" onClick={handleContact}>{el.approved?"Decline":"Approve"}</button>
          {console.log(`kkkkkkkkk${rdvApproved}`)}
        
        <button className="ui basic red button" onClick={()=>dispatch(deleterdv(el._id))}>Remove</button>

        {}
        
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Rdv_card_Doc

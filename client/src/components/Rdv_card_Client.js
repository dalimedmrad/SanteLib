import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleterdv } from '../Redux/actions/rdv'
import CheckIcon from '@material-ui/icons/Check';

const Rdv_card_Client = ({ el }) => {
    const dispatch=useDispatch()
  const rdvProfile = useSelector((state) => state.rdvReducer.result);
  console.log(el);
  return (
    <div className='card-shadow2'>
      <div className="ui cards mx-2 my-2">
        <div className="card">
          <div className="content">
          {el.approved?
      <CheckIcon />
      :null}
            <div className="header">{el.doc_name}</div>

            <div className="description">{el.date}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
             

              <button className="ui basic red button"onClick={()=>dispatch(deleterdv(el._id))} >Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rdv_card_Client;

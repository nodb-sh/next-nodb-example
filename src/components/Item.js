"use client";

import { useState, useReducer } from "react";
import { editItem, deleteItem } from "@/app/actions";

function reducer(state, action) {
  const [itemProp, itemValue] = action;
  return {
    ...state,
    [itemProp]: itemValue,
  }
}

const EditItem = ({ state, dispatch }) => {
  return (
    <>
      <div className="flex justify-between">
        <span>Title:</span>
        <input 
          className="text-slate-950 px-2 w-36" 
          type="text" 
          value={state.itemName} 
          onChange={(e) => dispatch(['itemName', e.target.value])}
        />
      </div>
      <p>Description:</p>
      <div>
        <input
          className="text-slate-950 px-2 w-full"
          type="text"
          value={state.itemDescription}
          onChange={(e) => dispatch(['itemDescription', e.target.value])}
        />
      </div>
      <div>
        In stock?
        <input 
          type="checkbox"
          checked={state.inStock}  
          onChange={() => dispatch(['inStock', !state.inStock])}
        />
      </div>
      <div className="flex justify-between">
        <span>Stock:</span>
        <input 
          className="text-slate-950 px-2 w-16"
          type="number"
          value={state.amount}
          onChange={(e) => dispatch(['amount', e.target.value])}
        />
      </div>
    </>
  );
}

export default function Item({ id, __meta, ...props }) {
  const { itemName, itemDescription, inStock, amount } = props;
  const [state, dispatch] = useReducer(reducer, { ...props });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="border border-1 m-4 p-4 w-64">
      {isEdit
        ? <EditItem state={state} dispatch={dispatch} {...props} />
        : (
          <>
            <p>Title: {itemName}</p>
            <h2>Description:</h2>
            <div>{itemDescription}</div>
            <p>In stock? <input type="checkbox" checked={inStock} disabled /></p>
            <p>Stock: {amount}</p>
          </>
        )}
      <div className="flex justify-between mt-4">
        <button className="bg-gray-100 text-slate-950 px-3" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? 'Cancel' : 'Edit'}
        </button>
        {isEdit &&
          <button
            className="bg-gray-100 text-slate-950 px-3 mx-1"
            onClick={() => {
              editItem({ id, ...state })
              setIsEdit(false);
            }}>
              Submit
          </button>
        }
        <button 
          className="bg-gray-400 text-slate-950 px-3"
          onClick={() => {
            deleteItem(id);
            setIsEdit(false);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

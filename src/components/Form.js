"use client";

import { addNewItem } from "@/app/actions";
import { useReducer, useState } from "react";
import { FlexFull, FlexCol, SpaceBetween } from '@/components/basic';

function reducer(state, action) {
  const [itemProp, itemValue] = action;
  return {
    ...state,
    [itemProp]: itemValue,
  }
}

const initState = {
  itemName: "",
  itemDescription: "",
  inStock: true,
  amount: 10,
};

const PostMessage = ({ response, message }) => {
  return (
    <span
      className="px-4"
      style={{
        color: response == "error"
          ? "indianred" 
          : "darkseagreen",
      }}
    >
      {response == "error"
        ? message
        : `Item's successfully stored. :)`}
    </span>
  );
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [postMessage, setPostMessage] = useState(null);
  return (
    <div className="container p-4 m-4">
      <form action="/" onSubmit={(e) => {
        e.preventDefault();
        if (state.itemName == '' || state.itemDescription == '' || Number.isNaN(parseInt(state.amount))) {
          setPostMessage({ res: 'error', message: 'Please fill all the fields' });
          setTimeout(() => setPostMessage(null), 2000);
        } else {
          addNewItem({ ...state });
        }
      }}>
        <FlexCol>
          <SpaceBetween>
            <FlexFull><label>Item name:</label></FlexFull>
            <FlexFull>
              <input
                className="rounded-md text-slate-950 px-2"
                value={state.itemName}
                onChange={(e) => dispatch(['itemName', e.target.value])}
              />
            </FlexFull>
          </SpaceBetween>
          <SpaceBetween>
            <FlexFull><label>Item description:</label></FlexFull>
            <FlexFull>
              <input
                className="rounded-md text-slate-950 px-2"
                value={state.itemDescription}
                onChange={(e) => dispatch(['itemDescription', e.target.value])}
              />
            </FlexFull>
          </SpaceBetween>
          <SpaceBetween>
            <FlexFull><label>In stock?:</label></FlexFull>
            <FlexFull>
              <input
                type="checkbox"
                checked={state.inStock}
                onChange={() => dispatch(['inStock', !state.inStock])}
              />
            </FlexFull>
          </SpaceBetween>
          <SpaceBetween>
            <FlexFull>
              <label>Stock:</label>
            </FlexFull>
            <FlexFull>
              <input
                className="rounded-md text-slate-950 px-2"
                type="number"
                value={state.amount}
                onChange={(e) => dispatch(['amount', e.target.value])}
                min={0}
                max={1000}
              />
            </FlexFull>
          </SpaceBetween>
        </FlexCol>
        <br />
        <div>
          <button className="bg-gray-100 text-slate-950 px-3" type="submit">
            Add new item
          </button>
          {postMessage && <PostMessage response={postMessage.res} message={postMessage.message} />}
        </div>
      </form>
    </div>
  );
}
